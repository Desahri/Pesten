/*
 * compares 2 cards and returns whether card1 is higher than card2
 * a card is higher when its suite is higher (clubs < hearts < spades < diamonds)
 * or when tied if its value is higher (A < 1 < 2 < ... < 10 < J < Q < K)
 */
function cardComparator(card1, card2) {
    if (convertSuite(card1.suite) < convertSuite(card2.suite)) {
        return -1;
    } else if (convertSuite(card1.suite) > convertSuite(card2.suite)) {
        return 1;
    }

    if (convertValue(card1.value) < convertValue(card2.value)) {
        return -1;
    } else if (convertValue(card1.value) > convertValue(card2.value)) {
        return 1;
    }

    return 0;
}

function convertSuite(suite) {
    switch (suite) {
        case "CLUBS":
            return 0;
        case "HEARTS":
            return 1;
        case "SPADES":
            return 2;
        default:
            return 3;
    }
}

function convertValue(value) {
    switch(value) {
        case "A":
            return 1;
        case "J":
            return 11;
        case "Q":
            return 12;
        case "K":
            return 13;
        default:
            return parseInt(value, 10);
    }
}

export default cardComparator;