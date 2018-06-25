import Ember from 'ember';
import ENUMS from 'btms/enums';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),

  user: null,

  didInsertElement() {
    this.roleProperty();
  },

  roleProperty() {
    const role = this.get("user.role");
    if(role === ENUMS.ROLES.ADMIN)
      this.set("isAdmin", true);
    else if(role === ENUMS.ROLES.SUPPORT_ENGINEER)
      this.set("isSupportEngineer", true);
    else if(role === ENUMS.ROLES.PRODUCT_ENGINEER)
      this.set("isProductEngineer", true);
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
