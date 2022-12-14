const startGame = document.querySelector('.start');
const hitButton = document.querySelector('.hit');
const stayButton = document.querySelector('.stay');

let dealerSum = 0;
let userSum = 0;
let hitAllowed = true;

const suits = ['Hearts','Clubs','Diamonds','Spades']
const values= ['Ace','2','3','4','5','6','7','8','9','10','King','Queen','Jack']
const deck = [];

for(i = 0; i < 4; i ++) {
    for(j = 0; j < 13; j++){
        deck.push(values[j] + " | " + suits[i])
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(deck);

//deck of cards created
//Shuffle created, need to use pop method to draw one card (index of array)

startGame.addEventListener('click', start, {once: true})
hitButton.addEventListener('click', hitCard)
stayButton.addEventListener('click', stay)

function start() {
    
   for(i = 0; i < 2 ; i++) {
        let currentCard  = deck.pop();
        dealerSum += valueOfCard(currentCard);
        document.getElementById('dealer').append("   " + currentCard); 
    } 
    for (i = 0; i < 2; i++) {
       let currentCard = deck.pop();
       userSum += valueOfCard(currentCard);
        document.getElementById('user').append("   " + currentCard);
    }
    

}

function hitCard() {
    if (hitAllowed === true) {
        let newCard = deck.pop();
        userSum += valueOfCard(newCard);
        document.getElementById('user').append("   " + newCard);
    }
    
    if (userSum > 21) {
        hitAllowed = false;
    }
}

function stay() {
    hitAllowed = false;

    while (dealerSum <= 17) {
        let currentCard  = deck.pop();
        dealerSum += valueOfCard(currentCard);
        document.getElementById('dealer').append("   " + currentCard)
    } 

    if (userSum > 21) {
        document.getElementById('message').innerText = "Dealer Won!";
    }
    else if (dealerSum > 21) {
        document.getElementById('message').innerText = "You won!";
    }
    else if (userSum === dealerSum) {
        document.getElementById('message').innerText = "Tie!";
    }
    else if (userSum > dealerSum) {
        document.getElementById('message').innerText = "You Won!";
    }
    else if (userSum < dealerSum) {
        document.getElementById('message').innerText = "Dealer Won!";
    }
    document.getElementById('usersum').innerText = "Sum: " + userSum;
    document.getElementById('dealersum').innerText = "Sum: " + dealerSum;
}


function valueOfCard(evt, dealerSum, userSum) {
    let firstIndex = evt.split(" | ");
    let value = firstIndex[0];
    if (value == "Ace" && dealerSum > 21 || userSum > 21) {
            return 1;
        } else if (value == "Ace") {
            return 11;
        }
        else if (value == "King" || value == "Jack" || value == "Queen") {
            return 10;
        }
        return parseInt(value);
    } 
    

