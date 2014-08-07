
var github_repos = ['TipTapPOP', 'Libra', 'AS3PokerClient', 'LibraServer', 'TouchFarmClient'];



function git_core(){
  
  console.log('git_core_init()');
  
  this.get_repos = function(){
    return github_repos;
  }
}

_git_core = new git_core();
