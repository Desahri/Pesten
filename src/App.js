import React, { Component } from 'react';

import Board from './view/board';

import StateController from './controller/stateController';
import GameState from './model/gameState';

class App extends Component {

    render() {
        var names = ["Jan","Wilbert","Robin","Stijn"]; //change when using different names
        return (
            <div>
                <Board controller={new StateController(new GameState(names))}/>
            </div>
        );
    }
}

export default App;
