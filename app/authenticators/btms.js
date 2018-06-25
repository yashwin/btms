import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'btms/config/environment';

const b64EncodeUnicode = str =>
  btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`))
  )
;

const getB64Token = (user, token) => b64EncodeUnicode(`${user}:${token}`);

const processData = (data) => {
  data.b64token = getB64Token(data.user_id, data.token);
  return data;
};

const BtmsAuthenticator = Base.extend({

  ajax: Ember.inject.service(),

  resumeTransistion() {
    const applicationRoute = Ember.getOwner(this).lookup("route:application");
    return applicationRoute.transitionTo(ENV['ember-simple-auth']["routeAfterAuthentication"]);
  },

  authenticate(identification, password) {
    const ajax = this.get("ajax");
    return new Ember.RSVP.Promise((resolve, reject) => {
      const data = {
        username: identification,
        password
      };
      const url = ENV['ember-simple-auth']['loginEndPoint'];
      ajax.post(url, {data})
      .then((data) => {
        data = processData(data);
        resolve(data);
        this.resumeTransistion();
      }, (error) => {
        this.get("notify").error(error.payload.message, ENV.notifications);
        for (error of error.errors) {
          if (error.status === "0") {
            this.get("notify").error("Unable to reach server. Please try after sometime", ENV.notifications);
          }
          this.get("notify").error("Please enter valid account details", ENV.notifications);
        }
        return reject(error);
      });
    });
  },

  restore(data) {
    const ajax = this.get("ajax");
    return new Ember.RSVP.Promise((resolve) => {
      const url = ENV['ember-simple-auth']['checkEndPoint'];
      ajax.post(url, {data})
      .then((data) => {
        data = processData(data);
        resolve(data);
        if (location.pathname === '/login') {
          this.resumeTransistion();
        }
      }, () => {
        localStorage.clear();
        location.reload();
      });
    });
  },

  invalidate() {
    const ajax = this.get("ajax");
    localStorage.clear();
    return new Ember.RSVP.Promise((resolve) => {
      const url = ENV['ember-simple-auth']['logoutEndPoint'];
      ajax.post(url)
      .then((data) => {
        resolve(data);
        location.reload();
      }, () => {
        location.reload();
      });
    });
  }
});


export default BtmsAuthenticator;
