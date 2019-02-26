import Deck from './stateComponents/deck';
import Player from './stateComponents/player';
import DiscardPile from './stateComponents/discardPile';

class GameState {
    constructor(playerNames) {
        this.deck = new Deck();
        this.deck.shuffleCards();
        
        this.players = [];
        playerNames.forEach(function(name) {
            this.players.push(new Player(name));
        });

        this.discardPile = new DiscardPile();

        this.turn = 1;
    }
}

export default GameState;