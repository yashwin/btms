import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username: faker.name.firstName
});
