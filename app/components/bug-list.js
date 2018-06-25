import Ember from 'ember';

export default Ember.Component.extend({

  sortStatusAscending: false,
  sortPriorityAscending: false,

  bugs: (function() {
    return this.get("store").findAll('bug');
  }).property(),

  bugSorting: ['id:desc'],
  sortedBugs: Ember.computed.sort('bugs', 'bugSorting'),

  actions: {
    sortStatus() {
      const sortStatusAscending = this.get("sortStatusAscending");
      if(!sortStatusAscending) {
        this.set("bugSorting", ['resolved:asc']);
        this.set("sortStatusAscending", true);
      }
      else {
        this.set("bugSorting", ['resolved:desc']);
        this.set("sortStatusAscending", false);
      }
    },
    sortPriority() {
      const sortPriorityAscending = this.get("sortPriorityAscending");
      if(!sortPriorityAscending) {
        this.set("bugSorting", ['priority:asc']);
        this.set("sortPriorityAscending", true);
      }
      else {
        this.set("bugSorting", ['priority:desc']);
        this.set("sortPriorityAscending", false);
      }
    }
  }
});
