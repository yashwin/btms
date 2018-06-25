import Ember from 'ember';
import ENUMS from 'btms/enums';

export function engineerRole(params) {
  const currentRole = params[0];
  if (currentRole === ENUMS.ROLES.SUPPORT_ENGINEER) {
    return "Support Engineer";
  } else if (currentRole === ENUMS.ROLES.PRODUCT_ENGINEER) {
    return "Product Engineer";
  }
}

export default Ember.Helper.helper(engineerRole);
