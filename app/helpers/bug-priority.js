import Ember from 'ember';
import ENUMS from 'btms/enums';

export function bugPriority(params) {
  const bugPriority = params[0];
  if (bugPriority === ENUMS.PRIORITY.LOW) {
    return "Low";
  } else if (bugPriority === ENUMS.PRIORITY.MEDIUM) {
    return "Medium";
  }
  else if (bugPriority === ENUMS.PRIORITY.HIGH) {
      return "High";
  }
}

export default Ember.Helper.helper(bugPriority);
