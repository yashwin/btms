import Ember from 'ember';
import ENUMS from 'btms/enums';
import ENV from 'btms/config/environment';

export default Ember.Component.extend({
  priorities: ENUMS.PRIORITY.CHOICES,
  bugPrority: ENUMS.PRIORITY.LOW,

  actions: {
    bugPrority() {
      this.set("bugPrority", parseInt(this.$('#bug-priority-new').val()));
    },
    createBug() {
      const name = this.get("bug");
      const description = this.get("description");
      const priority = this.get("bugPrority");
      const data = {
        name,
        description,
        priority
      };
      const bug = this.get("store").createRecord('bug', data);
      bug.save()
      .then((data) => {
        this.get("notify").success("Bug Created Successfully",  ENV.notifications);
        this.set("bug", "");
        this.set("description", "");
        this.store.pushPayload(data);
      }, () => {

      });
    }
  }
});
