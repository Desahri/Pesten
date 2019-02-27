import Deck from './stateComponents/deck';
import Player from './stateComponents/player';
import DiscardPile from './stateComponents/discardPile';

class GameState {
    constructor(playerNames) {
        this.deck = new Deck();
        this.deck.shuffleDeck();
        
        var players = [];
        playerNames.forEach(function(name) {
            players.push(new Player(name));
        });
        this.players = players;

        this.discardPile = new DiscardPile();

        this.turn = 1;
    }
}

export default GameState;