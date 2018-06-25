import DS from 'ember-data';
import ENUMS from 'btms/enums';

export default DS.Model.extend({
  name: DS.attr('string'),
  role: DS.attr('number'),

  humanizedRole: (function() {
    const role = this.get("role");
    if(role === ENUMS.ROLES.ADMIN) {
      return "Admin";
    }
    else if(role === ENUMS.ROLES.SUPPORT_ENGINEER) {
      return "Support Engineer";
    }
    else if(role === ENUMS.ROLES.PRODUCT_ENGINEER) {
      return "Product Engineer";
    }
  }).property("role")
});
