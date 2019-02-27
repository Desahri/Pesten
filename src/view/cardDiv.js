import React from 'react';
import './cardDiv.css';

function CardDiv(props) {
    var suite = "";
    var col = "";
    switch(props.card.suite) {
        case 'CLUBS':
            suite = "♣";
            col = "black";
            break;
        case 'HEARTS':
            suite = "♥";
            col = "red";
            break;
        case 'SPADES':
            suite = "♠";
            col = "black";
            break;
        case 'DIAMONDS':
            suite = "♦";
            col = "red";
            break;
    }
    return(
        <div className={"card " + col}>{" " + props.card.value + suite + " "}</div>
    );
}

export default CardDiv;