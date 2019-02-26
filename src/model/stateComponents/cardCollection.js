class CardCollection {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
        for (let i = 0; i < this.cards.length; i++) {
            let c = this.cards[i];
            if(c.suite == card.suite && c.value == card.value) {
                return this.cards.splice(i, 1);
            }
        }
    }
}

export default CardCollection;