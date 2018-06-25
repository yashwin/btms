const ENUMS = {

  ROLES: {
     ADMIN: 0,
     SUPPORT_ENGINEER: 1,
     PRODUCT_ENGINEER: 2
   },

  PRIORITY: {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2
  }
 }

 for (let enumName in ENUMS) {
   const enumValues = ENUMS[enumName];
   const choices = [];
   const values = [];
   for (let key in enumValues) {
     const value = enumValues[key];
     choices.push({key, value});
     values.push(value);
   }
   ENUMS[enumName]['CHOICES'] = choices;
   ENUMS[enumName]['VALUES'] = values;
 }

export default ENUMS;
