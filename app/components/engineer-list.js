import Ember from 'ember';

export default Ember.Component.extend({

  supportEngineers: (function() {
    return this.get("store").findAll('support-engineer');
  }).property(),

  productEngineers: (function() {
    return this.get("store").findAll('product-engineer');
  }).property(),

  actions: {
    deleteEngineer(type, id) {
      const url = [type, id].join('/');
      this.get("ajax").delete(url)
      .then((data) => {
        const engineersData = data.engineersData.map((item) => ({
          id: item.id,
          username: item.username
        }));
        if(data.type === "support") {
          this.set("supportEngineers", engineersData);
        }
        else {
          this.set("productEngineers", engineersData);
        }

      }, () => {
        // error code goes here
      })
    }
  }

});
