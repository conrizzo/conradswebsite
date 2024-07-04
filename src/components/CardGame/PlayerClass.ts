


export interface Player {
  name: string;
  cards: any[];
  card_values: number;
  pass: boolean;
  bid: number;
  displayInfo(): void;
}

export interface DeckOfCards {
  theDeckOfCards: any[];
  createCards(): void;
  shuffle(): any[];
}

// class to create a player
export class Player {
  name: string;
  cards: any[];
  card_values: number;
  pass: boolean;
  bid: number;

  constructor(name: string, cards: any[], card_values: number, pass: boolean = false, bid: 18) {
    this.name = name;
    this.cards = cards;
    this.card_values = card_values;
    this.pass = pass;
    this.bid = bid;
  }
}

// class to create a deck of cards
export class DeckOfCards {
  theDeckOfCards: any[];

  constructor(theDeckOfCards: any[]) {
    this.theDeckOfCards = theDeckOfCards;
  }

  createCards() {
    const suits = ["hearts", "diamonds", "spades", "clubs"]
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        this.theDeckOfCards.push([cards[j], suits[i]]);
      }
    }
  }

  async testBackEnd() {
    try {

      const response = await fetch('/backend/api/blackjack');
      const data = await response.json();

    }

    catch (error) {
      console.log(error)
    }
  }

  shuffle() {
    const array = this.theDeckOfCards;
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}



