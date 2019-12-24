import {GameState, Card, Distribution, Player, Showdown, iGameStateHandler} from "./buzzonline_interfaces";
import Cards from "./buzzonline_cards";

export default class GameStateHandler implements iGameStateHandler {
    private _cardStack:      Card[];
    private _currentAnswer:  string;
    private _currentCard:    number;
    private _currentPlayer:  number;
    private _currentRow:     number;
    private _distributions:  Distribution[];
    private _masterDeviceId: number;
    private _masterNickname: string;
    private _phase:          number;
    private _players:        Player[];
    private _showdown:       Showdown;
    private _subPhase:       number;
    private _rounds:         number;
    private _inProgress:     boolean;

    public initDefault(): GameStateHandler {
        
        // Fill handler with init data
        this._cardStack =       new Cards().generate();
        this._currentAnswer =   "";
        this._currentCard =     0;
        this._currentPlayer =   0;
        this._currentRow =      0;
        this._distributions =   [];
        this._masterDeviceId =  0;
        this._masterNickname =  "";
        this._phase =           0;
        this._players =         [];
        this._showdown =        null;
        this._subPhase =        0;
        this._rounds =          0;
        this._inProgress =      false;
        
        return this;
    }

    public init(gameState: GameState) {
        //Manually set the game state init
        for (const key in gameState) {
            if (gameState.hasOwnProperty(key)) {
                this['_' + key] = gameState[key];
            }
        }
    }

    public get(parameter: string): any {

        //Return the requested parameter
        return this['_' + parameter];
    }

    public set(parameter, data): void {

        //Check for valid type
        if(typeof data !== typeof this['_' + parameter])
            throw new Error("Invalid type for parameter " + parameter + '; expected' + typeof this['_' + parameter] + ', got ' + typeof data);
        
        //Set the parameter and return
        this['_' + parameter] = data;
        return;
    }
}