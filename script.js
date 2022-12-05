'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20,
  highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'rgb(107, 111, 107)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  document.querySelector('.number').textContent = guess;
  //document.queryCommandValue('.label-score').textContent=score;
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        '😭 You Lose. Please try again.';
    }
    //when guess is too low
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        '😭 You Lose. Please try again.';
    }
    //when guess is correct
  } else {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) highScore = score;
    document.querySelector('.message').textContent = '🎉 Correct Answer';
    document.querySelector('.highscore').textContent = highScore;
  }
});
