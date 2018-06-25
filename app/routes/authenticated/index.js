import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    // const userId = this.get("session.data.authenticated.user_id");
    const userId = 1;
    return this.get('store').find('user', userId);
  }
});
