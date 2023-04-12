// create variable and assign value;   
let firstCard = randomNumber();
let secondCard = randomNumber();
let sumOfCards = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.querySelector(' #message-el' );
let sumEl = document.querySelector('.card-sum');
let playerCards = document.querySelector( '.player-cards' );
let drawACardBtn = document.querySelector(' .new-card-btn' );
let startGameBtn = document.querySelector( ' .start-btn' );
let restartGameBtn = document.querySelector( ' .restart-btn' );
let cards = [firstCard, secondCard];

// Game at the begin and restart; 
function initialGame() {
  sumEl.textContent = '';
  playerCards.textContent = '';  
  drawACardBtn.style.display = 'none';
  restartGameBtn.style.display = 'none';
}

// create a random number between 2 and 11; 
function randomNumber() {
    let randomNumber = Math.floor( ( Math.random() * 10 ) + 2 );
    return randomNumber;
};

// check the cards 
function checkCards() {
  if (sumOfCards <= 20) {
        message = "Do you want to draw a new card?";
        drawACardBtn.style.display = 'block';
        startGameBtn.style.display = 'none';
    } else if ( sumOfCards === 21 ) {
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack!";
    } else {
        isAlive = false;
      message = "You're out of the game!";
      drawACardBtn.style.display = 'none';
      restartGameBtn.style.display = 'block';
    }
     messageEl.textContent = message;
}

//function display cards and sum
function displayCards() {
    for ( let i = 0; i < cards.length; i++ ) {
        playerCards.textContent += cards[ i ] + ' ';
        sumEl.textContent = sumOfCards;
    } 
}

// function draw another cards
function drawACard() {
    playerCards.textContent = " ";
    let anotherCard = randomNumber();
    cards.push( anotherCard );
    sumOfCards += anotherCard;
    displayCards();
    checkCards();
   
}

// start the Game
function startGame() {
    displayCards() 
    checkCards();
}


initialGame(); 

// 3. start game by clicking on the btn
startGameBtn.addEventListener( 'click', startGame );
drawACardBtn.addEventListener( 'click', drawACard );
restartGameBtn.addEventListener( 'click', initialGame );