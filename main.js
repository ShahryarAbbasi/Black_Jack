const startGame = document.querySelector('.start');
const hitButton = document.querySelector('.hit');
const stayButton = document.querySelector('.stay');



let dealerSum = 0;
let userSum = 0;
let flippedCard;
let hitAllowed = true;

const suits = ['hearts','clubs','diamonds','spades']
const values= ['Ace','2','3','4','5','6','7','8','9','10','King','Queen','Jack']
const deck = [];

for(i = 0; i < 4; i ++) {
    for(j = 0; j < 13; j++){
        deck.push(values[j] + " of " + suits[i])
    }
}
//deck of cards created.
//variable that selects random card from deck. No need for a shuffle as the card drawn will always be random
//may need to add shuffle
let randomCard = deck[Math.floor(Math.random()*deck.length)]

startGame.addEventListener('click', start)
hitButton.addEventListener('click', hitCard)
stayButton.addEventListener('click', stay)

function start() {
    flippedCard = randomCard;
    dealerSum += valueOfCard(randomCard);
    
    
   while (dealerSum < 17) {
        let currentCard  = randomCard;
        dealerSum += valueOfCard(currentCard);
        document.getElementById('dealer').append(randomCard); 
    } 
    for (i = 0; i < 2; i++) {
       let currentCard = randomCard;

    }

    

}

function hitCard() {
    if (hitAllowed == true) {
        return;
    }
    
}

function stay() {

}

function ace() {

}

function valueOfCard(randomCard) {
    let indexOfCard = randomCard.split(" of ");
    let value = indexOfCard[0];
    if (value == isNaN) {
        if (value == "Ace") {
            return 11;
        } else return 10;
    }
    return parseInt(value);
}


