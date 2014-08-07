
require('./init_app');

//var github_repos = ['TipTapPOP', 'Libra', 'AS3PokerClient', 'LibraServer', 'TouchFarmClient'];

exports.info_github = function(req, res)
{
  
  var github_repos = _git_core.get_repos();
  res.render('info_github', {jade_github_repos : github_repos});
  //var v = ['hello', 'world','hello', 'world','hello', 'world','hello', 'world','hello', 'world','hello', 'world','hello', 'world'];
  
  //res.render('index', { title: 'Express', doneTasks : v, num:Math.random()});
};
