'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higscore = 0;

const displayGuessMessage = (message) => {
  document.querySelector('.guess-message').textContent = message;
};
const displayScore = () => {
  document.querySelector('.score').textContent = score;
};
const displayQuestion = (rem) => {
  document.querySelector('.question').style.width = rem;
};
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    displayGuessMessage('Введите число!');

    //Player win
  } else if (guessingNumber === secretNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    displayQuestion('50rem');
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;

    if (score > higscore) {
      higscore = score;
      document.querySelector('.highscore').textContent = higscore;
    }

    //To high
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      displayScore();
    } else {
      displayGuessMessage('GAME OVER!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayGuessMessage('Начни угадывать!');
  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.798)';
  displayQuestion('25rem');
  document.querySelector('.number-input').value = '';
  displayScore();
});
