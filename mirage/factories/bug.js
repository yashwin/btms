import { Factory, faker } from 'ember-cli-mirage';
import ENUMS from 'btms/enums';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },
  description: faker.lorem.sentence,
  priority() {
    return faker.random.arrayElement(ENUMS.PRIORITY.VALUES);
  },
  resolved: faker.random.boolean
});
