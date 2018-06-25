import { Factory } from 'ember-cli-mirage';
import ENUMS from 'btms/enums';

export default Factory.extend({
  name: faker.name.firstName,
  role() {
    return faker.random.arrayElement(ENUMS.ROLES.VALUES);
  }
});
