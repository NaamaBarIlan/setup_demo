'use strict';

var userName = prompt('Hi! Welcome! I\'m Na\'ama! What is your name?');
alert('Hi ' + userName + ', I\'m glad you are here! Let\'s play a guessing game so that you can learn more about me.');
console.log('The user\'s name is ' + userName);

var answerOne = prompt('Guess this about me: have I ever been on a vacation to Key West?').toLowerCase()

if (answerOnce === 'y' || answerOnce === 'yes') {
  alert('You\'re right, ' + userName + '! In fact, I am going back there in 4 weeks');
  console.log( 'user got the correct answer to #1');
}
else {
  alert('Sorry, ' + userName + ', that is incorrect. I was last there in July 2018');
  console.log('user got the wrong answer to #1');
}

