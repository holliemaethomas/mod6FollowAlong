'use strict';

var today = newDate();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');



// git add .
// git commit m - 'reason why'
// git push origin master
// for extra fun checkout a branch 'git checkout -b branchname'
// merge the branch into master. google it. also check my book marks for useful stuff.
// I opened a tutorial on git branching for you. 
