export default function(server) {
  var userCount = 1;
  var productEngineerCount = 5;
  var supportEngineerCount = 5;
  var bugCount = 10;
  server.createList('bug', bugCount);
  server.createList('user', userCount);
  server.createList('product-engineer', productEngineerCount);
  server.createList('support-engineer', supportEngineerCount);
}
