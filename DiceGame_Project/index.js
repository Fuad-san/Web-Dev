var randomNumber1 = Math.floor((Math.random() * 6));
var randomNumber2 = Math.floor((Math.random() * 6));
var images = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png',
];

var diceImage1 = document.getElementsByClassName('img1')[0];
var diceImage2 = document.getElementsByClassName('img2')[0];

// Set the src attributes
diceImage1.setAttribute('src', images[randomNumber1]);
diceImage2.setAttribute('src', images[randomNumber2]);

var message = document.querySelector('h1')
if (randomNumber1 === randomNumber2){
    message.textContent = 'Draw!'
}else if (randomNumber1 < randomNumber2){
    message.textContent = 'Player two wins!'
}else {
    message.textContent = 'Player one wins!'
}

