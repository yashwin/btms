import Ember from 'ember';
import ENUMS from 'btms/enums';
import ENV from 'btms/config/environment';

export default Ember.Component.extend({
  roles: ENUMS.ROLES.CHOICES.slice(1, 3),
  selectedRole: ENUMS.ROLES.SUPPORT_ENGINEER,

  actions: {
    createEngineer() {
      const username = this.get("identification");
      const password = this.get("password");
      if (!username || !password) {
        return this.get("notify").error("Please enter all the values", ENV.notifications);
      }
      const selectedRole = this.get("selectedRole");
      const data = {
        username,
        password
      };
      let endpoint = "support-engineer"
      if(selectedRole === ENUMS.ROLES.PRODUCT_ENGINEER) {
        endpoint = "product-engineer";
      }
      this.set("isCreatingEnginner", true);
      this.get("ajax").post(endpoint, data)
      .then((data) => {
        this.get("notify").error("User created successfully", ENV.notifications);
        this.set("isCreatingEnginner", false);
        this.store.pushPayload(data);
        this.set("identification", "");
        this.set("password", "");
      }, () => {
        this.set("isCreatingEnginner", false);
        this.get("notify").error("error");
      });
    },
    selectRole() {
      this.set("selectedRole", parseInt(this.$('#engineer-role').val()));
    },
  }
});
