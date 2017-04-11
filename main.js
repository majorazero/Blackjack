let suit = ['Spades','Diamonds','Hearts','Clubs'];
let value = ['A','2','3','4',
            '5','6','7','8',
            '9','10','J','Q','K'];
let deck = new Array();

function createDeck(){
  deck = new Array();
  for(let i = 0; i < value.length; i++){
    for(let j = 0; j <suit.length; j++){
      let val = parseInt(value[i]);
      if (value[i] === 'J' || value[i] === 'Q' || value[i] === 'K'){
        val = 10;
      }
      else if (value[i] === 'A'){
        val = 11;
      }
      let card = {
        Value: value[i],
        Suit: suit[j],
        Val: val
      };
      deck.push(card);
    }
  }
}

function valueOfHand(hand){ //find the value of a player's Hand based on an array of cards
  let value = 0;
  let aAmount = 0;
  for (let i = 0; i < hand.length; i++){
    value += hand[i].Val;
    if (hand[i].Value === 'A'){
      aAmount++;
    }
    if (hand[i].Value === 'A' && aAmount != 0){
      value -= 10;
    }
  }
  while (value > 21 && aAmount != 0){
    value -= 10;
    aAmount--;
  }
  return value;
}

function deal(hand,numCard){ //will deal a random card from the existant deck, no need for shuffle
  for(let i =0; i<numCard; i++){ //deals numCard amount of cards to hand
    let randPos = Math.floor(Math.random()*(deck.length+1)); // every loop will regenerate a new random position value that takes into account the new deck length
    hand.push(deck.splice(randPos,1)); //removes item at the random position and pushes it to the dealt hand
  }
}
