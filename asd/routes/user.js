
/*
 * GET users listing.
 */

exports.list = function(req, res){
  
  //JSONObject = { 'name':'kyunghun' };
  console.log('calsdlasdssad@');

  var param0 = ['kyunghun', 'plus'];
  
  var _json = JSON.stringify({
    keyword : param0
  });
  res.end(_json);
  
  //res.send("respond with a resource yg baby");
};
