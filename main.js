// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard; 
let secondCard; 
firstCard = Math.floor((Math.random() * 10 )+ 2); 
secondCard = Math.floor((Math.random() * 10 )+ 2);

console.log(firstCard);
console.log(secondCard);

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard; 
console.log( sum );


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}