import React, { Component } from 'react';

import Board from './view/board';

import StateController from './controller/stateController';
import GameState from './model/gameState';

class App extends Component {

  render() {
    return (
      <div>
        <Board controller={new StateController(new GameState(["Didier","Laurent","Joelle","Frans"]))}/>
      </div>
    );
  }
}

export default App;
