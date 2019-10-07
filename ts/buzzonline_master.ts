/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
import Cards from "./buzzonline_cards";

window.onload = (_e: Event) => {
    var cards = new Cards();
    var cardstack = cards.generate(true)
    console.log(cardstack);
    var card = cards.deal(cardstack);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, true);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, false, true);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, true, true);
    console.log(card, cardstack);
}
