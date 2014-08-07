
/*
 * GET users listing.
 */

exports.list = function(req, res){
  
  //JSONObject = { 'name':'kyunghun' };
  console.log('calsdlasdssad@');

  //var param0 = ['kyunghun', 'plus'];
  //var param0 = '[{"id":"1","name":"test1"},{"id":"2","name":"test2"},{"id":"3","name":"test3"},{"id":"4","name":"test4"},{"id":"5","name":"test5"}]';
  var param0 = '["iopoipoip", "iopoipoiop"]';
  
  var _json = JSON.stringify({
    keyword : param0
  });
  res.end(_json);
  
  //res.send("respond with a resource yg baby");
};
