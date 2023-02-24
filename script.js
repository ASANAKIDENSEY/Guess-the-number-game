'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';

    //Player win
  } else if (guessingNumber === secretNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('.question').textContent = secretNumber;

    //To high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Число больше правильного!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }

    //To low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        'Число меньше правильного!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.question').textContent = '???';
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.798)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.number-input').value = '';
  document.querySelector('.score').textContent = score;
});
console.log(secretNumber);
