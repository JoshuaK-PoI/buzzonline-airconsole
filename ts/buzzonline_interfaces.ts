/**
 * The GameState interface
 *
 * Holds game data to be accessed and manipulated during a game.
 *
 * @interface GameState
 */
export interface iGameState {
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
}

/**
 * The Showdown Interface
 *
 * Holds information for the Showdown (after phase 2 of a round) if necessary.
 *
 * @interface Showdown
 */
export interface iShowdown {
    answer:         String;
    currentCard:    Number;
    manifest:       iPlayer[];
    manifestRematch:iPlayer[];
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
export interface iPlayer {
    cards:          iCard[];
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
export interface iCard {
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
export interface iDistribution {

}

/**
 * Options for the HTTP XHR request
 * 
 * @param {string}                      method          The HTTP method to use ('GET', 'POST', 'PUT', etc.)
 * @param {string}                      uri             The Request URI
 * @param {XMLHttpRequestResponseType}  responseType    The type of response expected ('text', 'arraybuffer', 'blob', 'document', 'json')
 * 
 * @interface HttpOptions
 */
export interface iHttpOptions {
    method:         string;
    uri:            string;
    responseType:   XMLHttpRequestResponseType;
}

/**
 * Options for the Screen Handler
 * 
 * @param {string}                      file    The file to be fetched. Placed in the dist/templates folder of this project, access them with only their filename (no extension at the end)
 * @param {ScreenHandlerOptionsParams}  params  Optional parameters for the screen handler
 */
export interface iScreenHandlerOptions {
    file:           string;
    params:         iScreenHandlerOptionsParams;
}

/**
 * Parameters for the screen handler
 * 
 * @param {string}  _inject         Specify the element where the content should be placed. If left blank, the content will be placed at the root of the DOM (Default #bo_container)
 * @param {string}  _content        The content to be replaced on the template.
 * @param {boolean} _append         If true, the content will be appended to the DOM instead of overwriting the content already placed at the target.
 * @param {boolean} _no_fadeout     Don't fade out the content before placing the new content.
 * @param {boolean} _enlarge_view   Removes the padding around the main container to allow for more screen use.
 * @param {boolean} _restore_view   Resets the padding around the main container.
 */
export interface iScreenHandlerOptionsParams {
    _inject:        string;
    _content:       string;
    _append:        boolean;
    _no_fadeout:    boolean;
    _enlarge_view:  boolean;
    _restore_view:  boolean;
}


/**
 * Game data
 * Holds assets for the game. Handled by master function.
 * 
 * @param {GameState} gameState All information of the current game state
 * @param {GameAssets} assets All loaded assets in the game
 */
export interface iGameData {
    gameState:      iGameState;
    assets:         iGameAssets;
}

/**
 * Game assets
 * Holds assets for the game.
 * 
 * @param {HTMLImageElement[]} imageBuffer Array of HTMLImageElements
 * @param {AudioBuffer[]} audioBuffer Array of AudioBuffers
 */
export interface iGameAssets {
    imageBuffer:    HTMLImageElement[];
    audioBuffer?:   AudioBuffer[];
}


/**
 * AirConsole Standard Message construct
 * Modeled after AirConsole's event-driven messaging system.
 * 
 * @param {string} message_id The identifier of the message.
 * @param {object} params Optional parameters to attach to the message
 */
export interface iAirConsoleData {
    message_id:     string;
    params?:        object;
}