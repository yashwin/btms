import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  notify: Ember.inject.service('notification-messages-service'),
  isLogingIn: false,
  identification: "",
  password: "",
  actions: {
    authenticate() {
      let identification = this.get('identification');
      let password = this.get('password');
      if (!identification || !password) {
        return this.get("notify").error("Please enter username and password", ENV.notifications);
      }
      this.set("isLogingIn", true);
      this.get('session').authenticate("authenticator:btms", identification, password);
    }
  }
});
