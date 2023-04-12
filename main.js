// 1. Create two variables, firstCard and secondCard. 
let firstCard,
    secondCard,
    sum,
    hasBlackJack,
    isAlive,
    message,
    startGameBtn,
    messageEl,
    playerCards,
    drawACardBtn,
    sumEl;
 
// assign value  
firstCard = ''
secondCard = ''
hasBlackJack = false;
isAlive = true;
message = '';
messageEl = document.querySelector(' #message-el' );
sumEl = document.querySelector('.card-sum');
playerCards = document.querySelector( '.player-cards' );
drawACardBtn = document.querySelector(' .new-card-btn' );
startGameBtn = document.querySelector( ' .start-btn' );

drawACardBtn.style.display = 'none';

// 2 Game start function
function startGame() {
     // Set their values to a random number between 2-11
    firstCard = Math.floor((Math.random() * 10 )+ 2); 
    secondCard = Math.floor( ( Math.random() * 10 ) + 2 );
    sum = firstCard + secondCard;

    sumEl.textContent = sum;
    playerCards.textContent = `${firstCard} ${secondCard}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        drawACardBtn.style.display = 'block';
        startGameBtn.style.display = 'none';
    } else if ( sum === 21 ) {
        hasBlackJack = true;
        message = "Wohoo! You've got Blackjack!";
    } else {
        isAlive = false;
        message = "You're out of the game!";
    }

    messageEl.textContent = message;
}

function drawACard() {
    let thirdCard = firstCard = Math.floor( ( Math.random() * 10 ) + 2 ); 
    sum = + thirdCard; 
    startGame();
}


// 3. start game by clicking on the btn
startGameBtn.addEventListener( 'click', startGame );
drawACardBtn.addEventListener( 'click', drawACard );