import React from 'react';

import CardDiv from './cardDiv';
import HandDiv from './handDiv';

import './board.css';
import '../lib/w3.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        let controller = this.props.controller;
        controller.startGame(7);
        this.controller = this.props.controller;
        this.state = {
            gameState: controller.gameState,
        }
    }

    /**
     * Makes the current player play a card (if possible)
     * does nothing if the game is already finished
     */
    doTurn() {
        if (this.controller.winner() != null) {
            return;
        }
        let state = this.controller.gamestate;
        this.setState({
            gameState: state,
        });
        this.controller.nextTurn();
    }

    render() {
        var winner = this.controller.winner();
        return (
            <div className="w3-display-container w3-light-green" style={{height: "100vh"}}>
                {/* The left player */}
                <div className="w3-display-left " style={{width: "33%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[1]}
                        turn={this.controller.getPlayers()[1] == this.controller.getCurrentPlayer() && winner == null}/>
                </div>

                {/* The middle players and info */}
                <div className="w3-display-middle w3-display-container" style={{width: "33%", height: "100vh"}}>
                    {/* The top player */}
                    <div className="w3-display-topmiddle" style={{width: "100%"}}>
                        <HandDiv 
                            player={this.controller.getPlayers()[2]}
                            turn={this.controller.getPlayers()[2] == this.controller.getCurrentPlayer() && winner == null}/>
                    </div>

                    {/* The discard pile and deck info */}
                    <div className="w3-display-middle">
                        <span>{"Deck size: " + this.controller.gameState.deck.cards.length}</span>
                        <br></br>
                        <CardDiv card={this.controller.getLastDiscarded()}/>
                        <br></br>
                        <span>{"Discard pile size: " + this.controller.gameState.discardPile.cards.length}</span>
                    </div>

                    {/* The bottom player and button */}
                    <div className="w3-display-bottommiddle" style={{width: "100%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[0]}
                        turn={this.controller.getPlayers()[0] == this.controller.getCurrentPlayer() && winner == null}/>
                        <button 
                            disabled={winner != null} 
                            onClick={() => this.doTurn()}
                        >{winner == null ? this.controller.getCurrentPlayer().playerName + " play" : winner + " has won"}</button>
                    </div>
                </div>

                {/* The right player */}
                <div className="w3-display-right" style={{width: "33%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[3]}
                        turn={this.controller.getPlayers()[3] == this.controller.getCurrentPlayer() && winner == null}/>
                </div>
            </div>
        )
    }
}

export default Board;