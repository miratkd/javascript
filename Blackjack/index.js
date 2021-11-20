let firstCard = getRandomInt(2,12)
let secondCard = getRandomInt(2,12)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log('you first card is: ' + firstCard)
console.log('your second card is: ' + secondCard)
console.log('final points is: ' + (firstCard + secondCard))

if (firstCard + secondCard < 21) console.log('do you want to draw a new card?')
else if (firstCard + secondCard > 21) console.log('sorry, you lose.')
else console.log('congratulations! you won')