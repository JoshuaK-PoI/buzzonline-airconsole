import {GameState, Card, Distribution, Player, Showdown} from "./buzzonline_interfaces";

export default class GameStateHandler implements GameState {
    cardStack:      Card[];
    currentAnswer:  String;
    currentCard:    Number;
    currentPlayer:  Number;
    currentRow:     Number;
    distributions:  Distribution[];
    masterDeviceId: Number;
    masterNickname: String;
    phase:          Number;
    players:        Player[];
    showdown:       Showdown;
    subPhase:       Number;
    rounds:         Number;

    constructor() {
        
    }
}