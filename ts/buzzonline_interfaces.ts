/**
 * The GameState interface
 *
 * Holds game data to be accessed and manipulated during a game.
 *
 * @param {Card[]}          cardStack       The main deck of cards currently "inactive" (ie. not in players' hands or open on the table)
 * @param {string}          currentAnswer   The answer expected from the player. Used in Phase 1.
 * @param {number}          currentCard     Keeps track of the card we're on in Phase 2 Ranges from 0 to 14.
 * @param {number}          currentPlayer   Keeps track of which player is actively playing in Phase 1, Phase Showdown and Phase 3.
 * @param {number}          currentRow      Keeps track of which row we're on in Phase 3.
 * @param {Distribution[]}  distributions   All active distributions of Phase 2.
 * @param {number}          masterDeviceId  AirConsole's Device ID of the master controller.
 * @param {string}          masterNickname  AirConsole's Nickname of the master controller.
 * @param {number}          phase           The current active phase. 0 = inactive game, 1 = Phase 1 (Dealing), 2 = Phase 2 (Pyramid), 3 = Phase 3 (Buzz)
 * @param {Player[]}        players         All active players and their information in the game.
 * @param {Showdown}        showdown        Information object for the Showdown (Phase 2)
 * @param {number}          subPhase        The current active sub-phase. Used in Phase 1 to specift which dealing round we're on.
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
 * @TODO: Verify information after building Showdown class methods
 * Holds information for the Showdown (after phase 2 of a round) if necessary.
 * @param {string} answer The expected answer from the player
 * @param {number} currentCard The current card
 * @param {Player[]} manifest The players in the Showdown
 * @param {Player[]} manifestRematch Players elected for a rematch (if the Showdown ended in a tie)
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

/**
 * Options for the HTTP XHR request
 * 
 * @param {string}                      method          The HTTP method to use ('GET', 'POST', 'PUT', etc.)
 * @param {string}                      uri             The Request URI
 * @param {XMLHttpRequestResponseType}  responseType    The type of response expected ('text', 'arraybuffer', 'blob', 'document', 'json')
 * 
 * @interface HttpOptions
 */
export interface HttpOptions {
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
export interface ScreenHandlerOptions {
    file:           string;
    params:         ScreenHandlerOptionsParams;
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
export interface ScreenHandlerOptionsParams {
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
export interface GameData {
    gameState:      GameState;
    assets:         GameAssets;
}

/**
 * Game assets
 * Holds assets for the game.
 * 
 * @param {HTMLImageElement[]} imageBuffer Array of HTMLImageElements
 * @param {AudioBuffer[]} audioBuffer Array of AudioBuffers
 */
export interface GameAssets {
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
export interface AirConsoleData {
    message_id:     string;
    params?:        object;
}