
require('./init_app');

exports.index = function(req, res)
{
  //var repos = _git_core.get_repos();

  //res.render('index', { title: 'Express', doneTasks : v, num:Math.random()});
  res.render('index', { title : 'helo', jade_github_repos: ['ewrwer', 'werewr']});
};
