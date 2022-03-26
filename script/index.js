var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = 'images/' + 'dice' + randomNumber1 + '.png';

var dice1 = document.querySelectorAll('img')[0];

dice1.setAttribute('src', randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = 'images/' + 'dice' + randomNumber2 + '.png';

var dice2 = document.querySelectorAll('img')[1];

dice2.setAttribute('src', randomDiceImage2);

var title = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
  title.textContent = 'Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
  title.textContent = 'Player 2 wins!';
} else if (randomNumber1 === randomNumber2) {
  title.textContent = 'Draw!';
}
