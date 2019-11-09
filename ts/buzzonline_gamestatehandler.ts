import {iGameState, iCard, iDistribution, iPlayer, iShowdown} from "./buzzonline_interfaces";

export default class GameState implements iGameState {
    cardStack:      iCard[];
    currentAnswer:  String;
    currentCard:    Number;
    currentPlayer:  Number;
    currentRow:     Number;
    distributions:  iDistribution[];
    masterDeviceId: Number;
    masterNickname: String;
    phase:          Number;
    players:        iPlayer[];
    showdown:       iShowdown;
    subPhase:       Number;
    rounds:         Number;

    constructor() {
    }
}