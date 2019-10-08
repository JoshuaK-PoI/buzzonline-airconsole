import { forIndex } from "./buzzonline_helpers";
import * as _v from "./buzzonline_vars";
import { Card } from "./buzzonline_interfaces";

export default class Cards {

    /**
     * Generates a new shuffled deck of cards
     *
     * @param {boolean} [jokers=false] Add Jokers to the deck. Default `false`.
     * @returns {Card[]} cardStack: `Card[]`
     * @memberof Cards
     */
    public generate(jokers: boolean = false): Card[] {
        var cardStack: Card[] = new Array();

        /* Declare Suits */
        var suits: string[] = [_v.SUIT_C, _v.SUIT_D, _v.SUIT_H, _v.SUIT_S];

        /* Add Jokers to suits */
        if(jokers)
            suits.push(_v.SUIT_B, _v.SUIT_R);

        /* Declare Values */
        var values: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        /* item: suit */
        for(const {item, index} of forIndex(suits)) {
            for(let value of values) {
                /* Set the JOKER value if the suit is of type joker */
                if([_v.SUIT_B, _v.SUIT_R].indexOf(item) !== -1) value = _v.VALU_J;

                /* Push the card onto the deck */
                cardStack.push({
                    color: [_v.SUIT_D, _v.SUIT_H, _v.SUIT_R].indexOf(item) == -1 ? _v.COLO_B : _v.COLO_R,
                    html: `${_v.HTML_BOCARD}${item[0].toUpperCase()}${value}`,
                    rank: this._calculate_rank({ suit_i: index, value }),
                    suit: item,
                    value: value
                });

                /* End the loop after 1 card if Jokers are being generated */
                if([_v.SUIT_B, _v.SUIT_R].indexOf(item) !== -1) break;
            }
        }
        return this._shuffle(cardStack);
    }

    /**
     * Deal a card from the provided deck.
     *
     * @param {Card[]} cardStack The deck to deal a card from
     * @param {boolean} [deleteCardFromStack=false] Delete the card from the deck after dealing it. Default `false`.
     * @param {boolean} [getFromEnd=false] Get the card from the bottom (end) of the deck. Default `false`.
     * @returns {Card} card
     * @memberof Cards
     */
    public deal(cardStack: Card[], deleteCardFromStack: boolean = false, getFromEnd: boolean = false): Card {
        if(deleteCardFromStack)
            return getFromEnd ? cardStack.pop() : cardStack.shift();   //Removes the card from the stack array, then returns it
        else
            return getFromEnd ? cardStack.slice(-1)[0] : cardStack[0]; //Returns the card from the stack array
    }

    private _calculate_rank({ suit_i, value }: { suit_i: number; value: number; }): number {
        return (4 * (value - 2)) + suit_i;
    }

    private _shuffle(stack: Array<Card>): Array<Card> {
        for (let i = stack.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stack[i], stack[j]] = [stack[j], stack[i]];
        }
        return stack;
    }
}