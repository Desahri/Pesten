class StateController {
    constructor(gameState) {
        this.gameState = gameState;
    }

    /**
     * 
     * @param {number of cards to give each player initially} initialCards
     * @pre initialCards < 13 
     */
    startGame(initialCards) {
        //divide cards in a traditional fashion (each player one card at a time)
        for(let i = 0; i < initialCards; i++) {
            for (let i = 0; i < 4; i++) {
                this.gameState.players[i].giveCard(this.gameState.deck.getTopCard());
            };
        }

        //put first card on the discard pile
        this.gameState.discardPile.addCard(this.gameState.deck.getTopCard());
    }

    /**
     * execute a turn
     */
    nextTurn() {
        let currentPlayer = this.gameState.players[this.gameState.turn-1]
        let currentCard = this.getLastDiscarded();

        let cardToPlay = selectCardToPlay(currentCard, currentPlayer);
        if (cardToPlay == null) {
            this.getDeckCard(currentPlayer);
        } else {
            this.playCard(currentPlayer, cardToPlay);
        }
    }

    /**
     * 
     * @param {The card on top of the discard pile} cardToFollow 
     * @param {possible cards to play} cards 
     * @param {function to decide the card to play if several can be played} strategy 
     * @returns the card to play according to the strategy or null if no card can be played
     */
    selectCardToPlay(cardToFollow, player) {
        var possibleCards = [];
        player.cards.forEach(function(c) {
            if (c.suite == cardToFollow.suite || c.value == cardToFollow.value) {
                possibleCards.push(c);
            }
        });

        //check if deck is empty or only has 1 card
        if (possibleCards.length == 0) {
            return null;
        } else if (possibleCards.length == 1) {
            return possibleCards[0];
        } else {
            return player.strategy(possibleCards);
        }
    }

    /**
     * 
     * lets the specified player play the specified card
     * @param {player to play a card} player 
     * @param {card to be played} card
     * @pre The player has the specified card 
     */
    playCard(player, card) {
        player.removeCard(card);
        this.gameState.discardPile.addCard(card);
    }

    /**
     * retrieves the top card from the deck and gives it to the player
     * if the deck is empty, put all discarded cards in the deck except the top card
     * @param {player to get a card from the deck} player 
     */
    getDeckCard(player) {
        let deck = this.gameState.deck;
        if(deck.cards.length == 0) {
            deck.addCards(discardPile.getBottomCards());
            deck.shuffleCards();
        }
        player.giveCard(deck.getTopCard());
    }

    //Getters and Setters
    getPlayers() {
        return this.gameState.players;
    }

    /**
     * returns the top card of the discard pile
     * @returns the card inserted last in the discard pile
     */
    getLastDiscarded() {
        return this.gameState.discardPile.seeTopCard();
    }
}