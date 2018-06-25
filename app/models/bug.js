import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  priority: DS.attr('number'),
  resolved: DS.attr('boolean'),

  statusHumanized: (function() {
    if(this.get("resolved")) {
      return "Resolved"
    }
    return "Unresolved"
  }).property("resolved"),

});
