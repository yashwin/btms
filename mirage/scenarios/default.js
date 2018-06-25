export default function(server) {
  var userCount = 1;
  var productEngineerCount = 5;
  var supportEngineerCount = 5;
  var bugCount = 10;
  var bugs = server.createList('bug', bugCount);
  var users = server.createList('user', userCount);
  var productEngineers = server.createList('product-engineer', productEngineerCount);
  var supportEngineers = server.createList('support-engineer', supportEngineerCount);
}
