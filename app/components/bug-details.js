import Ember from 'ember';
import ENUMS from 'btms/enums';
import ENV from 'btms/config/environment';

export default Ember.Component.extend({
  tagName: "tr",
  priorities: ENUMS.PRIORITY.CHOICES,

  otherProrities: (function() {
    const priorities = this.get("priorities");
    const bugPrority = parseInt(this.get("bug.priority"));
    return priorities.filter(bug => bugPrority !== bug.value);
  }).property("priorities", "bug.priority"),

  actions: {
    changePriority() {
      const priority = this.$('#bug-priority').val();
      const data = {
        priority
      };
      const url = [ENV.endpoints.updatePriority, this.get("bug.id")].join('/');
      this.get("ajax").put(url, data)
      .then(() => {
        this.get("notify").success("Prority Changed", ENV.notifications);
      }, () => {
        // Error Code here
      });
    },

    changeStatus() {
      const bugStatus = this.get("bug.resolved");
      const data = {
        bugStatus: !bugStatus
      };
      const url = [ENV.endpoints.updateStatus, this.get("bug.id")].join('/');
      this.get("ajax").put(url, data)
      .then(() => {
        this.set("bug.resolved", !bugStatus);
        this.get("notify").success("Status Changed", ENV.notifications);
      }, () => {
        // Error Code here
      });
    }

  }
});
