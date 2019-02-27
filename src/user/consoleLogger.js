import StateController from '../controller/stateController';
import GameState from '../model/gameState';

function playGame() {
    var controller = new StateController(new GameState(["Didier","Laurent","Joelle","Frans"]));

    console.log("Start game");
    controller.startGame(7);

    while(true) {
        console.log("turn " + controller.getCurrentTurn());
        var player = controller.getCurrentPlayer();
        console.log("player " + player.playerName + "\'s turn");
        console.log(controller.getLastDiscarded().value + " of " + controller.getLastDiscarded().suite + " on the table")
        let card = controller.selectCardToPlay(
            controller.getLastDiscarded(),
            player,
        );
        if (card == null) {
            console.log("Player " + player.playerName + " takes a card");
        } else {
            console.log("Player " + player.playerName + " plays " + card.value + " of " + card.suite);
        }
        if (player.cards.length == 1) {
            console.log("Player " + player.playerName + " has 1 card left");
        } else if (player.cards.length == 0) {
            console.log("Player " + player.playerName + " has won");
            break;
        }
        console.log("----------");
        controller.nextTurn();
    }
    console.log("Game finished in " + (controller.getCurrentTurn()) + " turns");
}

export default playGame;