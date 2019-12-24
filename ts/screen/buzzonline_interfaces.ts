/**
 * Systematic interfaces
 */
export interface Observable {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(state: number): void;
}

export interface Observer {
    update(state: number): void;
}


/**
 * Interface iBuzzOnline
 */
export interface iBuzzOnline {
    load():         void;
    init(__assets: GameAssets): void;
    start():        void;
}

export interface iBuzzOnlineFunctions {
    master_change_option(device_id: number, option_data: BuzzOnlineOptions): void;
    start_game(device_id: number): void;

}

export interface iBuzzOnlineAirconsoleAdapter {
    start_device_connection_listener(): void;
}

export interface iBuzzOnlineTimer {
    id: ReturnType<typeof setTimeout>;
    started: Date;
    remaining: number;
    running: boolean;

    start(): void;
    pause(): void;
    get_time_left(): number;
    get_state_running(): boolean;
}

/**
 * The BuzzOnlineOptions object
 * 
 * @param {boolean}         option_joker    Add Jokers to the card deck. default `false`.
 * @param {boolean}         difficult_pyramid Shows the difficult pyramid (closed cards, in reverse order). Default `true`.
 */
interface BuzzOnlineOptions {
    option_joker: boolean;
    difficult_pyramid: boolean;
}

/**
 * The GameState Handler interface
 *
 * Accesses and manipulates during a game.
 *
 *
 * @interface iGameStateHandler
 */
export interface iGameStateHandler {
    get(parameter: string): any;
    set(parameter: string, data: any): void;
}

/**
 * The GameState object
 *
 * Holds game data to be accessed and manipulated during a game.
 *
 *
 * @interface GameState
 */
export interface GameState {
    inProgress:     boolean;
    cardStack:      Card[];
    currentAnswer:  string;
    currentCard:    number;
    currentPlayer:  number;
    currentRow:     number;
    distributions:  Distribution[];
    masterDeviceId: number;
    masterNickname: string;
    phase:          number;
    players:        Player[];
    showdown:       Showdown;
    subPhase:       number;
    rounds:         number;
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
    _inject?:        string;
    _content?:       string;
    _append?:        boolean;
    _no_fadeout?:    boolean;
    _enlarge_view?:  boolean;
    _restore_view?:  boolean;
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