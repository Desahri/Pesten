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

    doTurn() {
        if(this.controller.winner() != null) {
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
                <div className="w3-display-left " style={{width: "33%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[1]}/>
                </div>

                <div className="w3-display-middle w3-display-container" style={{width: "33%", height: "100vh"}}>
                    <div className="w3-display-topmiddle" style={{width: "100%"}}>
                        <HandDiv 
                            player={this.controller.getPlayers()[2]}/>
                    </div>

                    <div className="w3-display-middle">
                        <span>{"Deck size: " + this.controller.gameState.deck.cards.length}</span>
                        <br></br>
                        <CardDiv card={this.controller.getLastDiscarded()}/>
                        <br></br>
                        <span>{"Discard pile size: " + this.controller.gameState.discardPile.cards.length}</span>
                    </div>

                    <div className="w3-display-bottommiddle" style={{width: "100%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[0]}/>
                        <button 
                            disabled={winner != null} 
                            onClick={() => this.doTurn()}
                        >{winner == null ? this.controller.getCurrentPlayer().playerName + " play" : winner + " has won"}</button>
                    </div>
                </div>

                <div className="w3-display-right" style={{width: "33%"}}>
                    <HandDiv 
                        player={this.controller.getPlayers()[3]}/>
                </div>
            </div>
        )
    }
}

export default Board;