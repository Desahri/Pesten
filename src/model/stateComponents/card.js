class Card {
    constructor(number) {
        var suite, value;

        //0 to 12 for clubs, 13 to 25 for hearts, etc
        switch(Math.floor(number / 13)) {
            case 0:
                suite = "CLUBS";
                break;
            case 1:
                suite = "HEARTS";
                break;
            case 2:
                suite = "SPADES";
                break;
            case 3:
                suite = "DIAMONDS";
                break;
        }

        //for all i where 0 <= i < 4
        //13 * i + number is in [0, 9] is value +1
        //else if 10 then jack, if 11 then queen, if 12 then king
        switch(number % 13) {
            case 10:
                value = "J";
                break;
            case 11:
                value = "Q";
                break;
            case 12:
                value = "K";
                break;
            default:
                value = "" + ((number % 13) + 1);
                break;
        }

        this.suite = suite;
        this.value = value;
    }
}

export default Card;