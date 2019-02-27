import React from 'react';

import CardDiv from './cardDiv';

import './handDiv.css';

/*
 * representation of a player, mainly the cards he/she is holding
 * also shows the name
 */
function HandDiv(props) {
    var cardDivs = props.player.cards.map((card, i) => {
        return(
            <CardDiv key={i.toString()} card={card} />
        );
    });
    let status = "";
    let statusClass = "";
    if (props.player.cards.length == 1) {
        status = "LAST CARD";
        statusClass = "lastCard";
    } else if (props.player.cards.length == 0) {
        status = "WINNER";
        statusClass = "winner";
    } else {
        statusClass = "cards";
    }
    return(
        <div className={statusClass + (props.turn ? " turn" : "")}>
            {cardDivs}
            <h1>{props.player.playerName + " " + status}</h1>
        </div>
    );
}

export default HandDiv;