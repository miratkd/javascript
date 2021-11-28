function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let player = {
  name: 'Mira',
  chips: 100
}
document.getElementById('player-el').textContent = player.name + ': ' + player.chips
let sum

let startGame = () => {
  if (player.chips < 20){
    document.getElementById("message-el").textContent ='you dont have more point to play, sorry.'
    return true
  }
  player.chips -= 20
  let firstCard = getRandomInt(2,12)
  let secondCard = getRandomInt(2,12)
  sum = firstCard + secondCard
  let hasBlackJack = false
  let isAlive = true
  let message = ""
  document.getElementById("cards-el").textContent = 'Cards: ' + firstCard + ' + ' + secondCard
  result()
}

let result = ()=> {
  document.getElementById("sum-el").textContent = "sum: " + sum
  document.getElementById('player-el').textContent = player.name + ': ' + player.chips
  if (sum <= 20) message = 'do you want to draw a new card?'
  else if (sum === 21) {
    message = 'congratulations! you won.'
    hasBlackJack = true
  }
  else {
    message = 'sorry, you lose.'
    isAlive=false
  }

  document.getElementById("message-el").textContent = message
}

let newCard = ()=>{
  if (!sum) document.getElementById("message-el").textContent = "begin a game first"
  else {
    let nextCard = getRandomInt(2,12)
    document.getElementById("cards-el").textContent += " + " + nextCard
    sum += nextCard
    result()
  }
}