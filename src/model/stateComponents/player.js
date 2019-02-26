import CardCollection from "./cardCollection";

class Player extends CardCollection {
    /**
     * 
     * @param {name of the player} playerName 
     */
    constructor(playerName) {
        super();
        this.playerName = playerName;
        this.strategy = function(possibleCards) {
            return possibleCards[0];
        };
    }

    /**
     * gives the player a custom strategy
     * @param {strategy function on which card to play} strategy 
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    /**
     * gives the player the specified card and sorts the hand
     * @param {card number to be added to the player cards} card 
     */
    giveCard(card) {
        this.addCard(card);
        this.cards.sort();
    }
}

export default Player;