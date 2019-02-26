import CardCollection from "./cardCollection";

class DiscardPile extends CardCollection{

    /**
     * returns the card at the top of the pile (at the end of the array)
     */
    seeTopCard() {
        return this.cards[this.cards.length - 1];
    }

    /**
     * returns and removes all cards except the card at the top
     */
    getBottomCards() {
        return(this.cards.splice(0, this.cards.length - 1));
    }
}

export default DiscardPile;