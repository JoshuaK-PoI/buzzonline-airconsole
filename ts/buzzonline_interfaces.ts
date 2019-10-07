/**
 * The GameState interface
 *
 * Holds game data to be accessed and manipulated during a game.
 *
 * @interface GameState
 */
export interface GameState {
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
}

/**
 * The Showdown Interface
 *
 * Holds information for the Showdown (after phase 2 of a round) if necessary.
 *
 * @interface Showdown
 */
export interface Showdown {
    answer:         String;
    currentCard:    Number;
    manifest:       Player[];
    manifestRematch:Player[];
}

/**
 * The Player Interface
 *
 * Holds information about a player
 *
 * @param {Card[]} cards    The card belonging to the player's hand
 * @param {Number} deviceId The player's Device ID. Constant during an AirConsole session. (Provided by AirConsole)
 * @param {Number} drinkAmt The amount of drinks the player has consumed
 * @param {String} nickname The player's nickname
 * @param {Number} playerId The player's game ID. Dynamic during an AirConsole session. (Provided by AirConsole)
 *
 * @interface Player
 */
export interface Player {
    cards:          Card[];
    deviceId:       Number;
    drinkAmt:       Number;
    nickname:       String;
    playerId:       Number;
}

/**
 * Represents a single playing card.
 *
 * @param {String} color The color of the card (Red/Black)
 * @param {String} html  Image source to represent in the DOM (<img> tag)
 * @param {Number} rank  The rank of the card. Calculated using a helper function
 * @param {String} suit  The suit of the card. (Diamonds/Hearts/Spades/Clubs)
 * @param {Number} value Numeric value of the card (2 to 10 + J{11}, Q{12}, K{13}, A{14})
 *
 * @interface Card
 */
export interface Card {
    color:          String;
    html:   	    String;
    rank:           Number;
    suit:           String;
    value:          Number;
}

/**
 *
 *
 * @interface Distribution
 */
export interface Distribution {

}