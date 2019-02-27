import CardCollection from './cardCollection';
import Card from './card';

class Deck extends CardCollection{

    constructor() {
        super();
        for (let i = 0; i < 52; i++) {
            this.addCard(new Card(i))
        }
    }

    /**
     * shuffles the elements in the array
     */
    shuffleDeck() {
        var j, x;
        for (let i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
    }

    /**
     * returns the card at the top of the deck (at the end of the array) and removes it
     * @returns the card object at the end of the array
     */
    getTopCard() {
        return this.cards.pop();
    }

    /**
     * adds the cards to the current deck
     * @param {cards to be added to the deck} cards 
     */
    addCards(cards) {
        for (let i = 0; i < cards.length; i++) {
            super.addCard(cards[i]);
        }
    }
}

export default Deck;