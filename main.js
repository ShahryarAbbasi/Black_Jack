const startGame = document.querySelector('.start');
const hitButton = document.querySelector('.hit');
const stayButton = document.querySelector('.stay');



let dealerSum = 0;
let userSum = 0;
let hitAllowed = true;

const suits = ['hearts','clubs','diamonds','spades']
const values= ['Ace','2','3','4','5','6','7','8','9','10','King','Queen','Jack']
const deck = [];


for(i = 0; i < 4; i ++) {
    for(j = 0; j < 13; j++){
        deck.push(values[j] + " of " + suits[i])
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(deck);

//deck of cards created.
//variable that selects random card from deck. No need for a shuffle as the card drawn will always be random
//may need to add shuffle

startGame.addEventListener('click', start, {once: true})
hitButton.addEventListener('click', hitCard)
stayButton.addEventListener('click', stay)

function start() {
    
   for(i = 0; i < 2 ; i++) {
        let currentCard  = deck.pop();
        dealerSum += valueOfCard(currentCard);
        document.getElementById('dealer').append(" " + currentCard); 
    } 
    for (i = 0; i < 2; i++) {
       let currentCard = deck.pop();
       userSum += valueOfCard(currentCard);
        document.getElementById('user').append(" " + currentCard);
    }
    

}

function hitCard() {
    if (hitAllowed === true) {
        let newCard = deck.pop();
        userSum += valueOfCard(newCard);
        document.getElementById('user').append(newCard);
    }
    
    if (userSum > 21) {
        hitAllowed = false;
    }
}

function stay() {

    while (dealerSum <= 17) {
        let currentCard  = deck.pop();
        dealerSum += valueOfCard(currentCard);
        document.getElementById('dealer').append(" " + currentCard)
    } 

    hitAllowed = false;
    
    let message = "";
    if (userSum > 21) {
        message = "You Lost!";
    }
    else if (dealerSum > 21) {
        message = "You won!";
    }
    else if (userSum == dealerSum) {
        message = "Tie!";
    }
    else if (userSum > dealerSum) {
        message = "You Won!";
    }
    else if (userSum < dealerSum) {
        message = "You Lost!";
    }
    document.getElementById('message').innerText = message;
    document.getElementById('usersum').innerText = "Sum: " + userSum;
    document.getElementById('dealersum').innerText = "Sum: " + dealerSum;
}

function ace(card) {
    let indexOfCard = card.split(" of ");
    let value = indexOfCard[0];
    if (value == "Ace" && dealerSum > 21) {
        valueOfCard(card) == 1;
    }
}

function valueOfCard(evt) {
    let indexOfCard = evt.split(" of ");
    let value = indexOfCard[0];
    if (value == "Ace") {
            return 11;
        } 
        else if (value == "King" || value == "Jack" || value == "Queen") {
            return 10;
        }
        return parseInt(value);
    } 
    

