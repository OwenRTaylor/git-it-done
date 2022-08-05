var getUserRepos = function() {

    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
      response.json().then(function(data) {


      })
  });

};
getUserRepos();
var x = 0;

var f = document.createElement('h1');


f.textContent = "1"

f.textContent = "2"