class CardCollection {
    constructor() {
        this.cards = [];
    }

    /*
     * adds the card to the card collection
     */
    addCard(card) {
        this.cards.push(card);
    }

    /*
     * removes the card from the collection and returns it.
     * if the card is not found in the collection, no card is removed and null is returned
     */
    removeCard(card) {
        for (let i = 0; i < this.cards.length; i++) {
            let c = this.cards[i];
            if(c.suite == card.suite && c.value == card.value) {
                return this.cards.splice(i, 1);
            }
        }
        return null;
    }
}

export default CardCollection;