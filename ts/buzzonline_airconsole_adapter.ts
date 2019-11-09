/// <reference path="./buzzonline_master.ts" />

import { AirConsoleData } from "./buzzonline_interfaces";
import ControllerFunctions from "./buzzonline_controller_functions";
import functions           from "./buzzonline_functions";

export default class AirConsoleAdapter {
    private _isMobile: boolean;
    private _controllerFunctions: ControllerFunctions;

    constructor(isMobile: boolean) {
        this._isMobile = isMobile;
        this._controllerFunctions = new ControllerFunctions;
    }

    /**
     * Starts the AirConsole Listening event handler.
     */
    public airConsoleStartListeners(): void {
        airConsole.onMessage = (device_id: number, data: AirConsoleData) => {
            switch(data.message_id) {
                /**
                 * Controller-only functions
                 */
                case 'JOINED_AS_SPECTATOR': 
                /* New player has joined in an active game, so should join as spectator */
                this._controllerFunctions.j(true);
                break;
                
                case 'JOIN_GAME': 
                /* New player has joined an idle game */
                this._controllerFunctions.j(false);
                break;
                
                case 'CONTROLLER_VIBRATE': 
                /* Vibrate the controller (AirConsole function) 
                    params: 
                        time:number | Array<number> Time in ms to vibrate the controller for, or vibration pattern
                */
                // NOTE: Function does not appear to exist in TS defintion file?
                navigator.vibrate(data.params['time'])
                break;
                
                case 'VIEW_UPDATE_ADDCARD': 
                /* Add a card to the view
                    params:
                        filename:string         The file name of the card to be shown
                        card.rank:number        The numeric rank of the card (found in the Card object)
                        card.properties:string  The card's suit and value (represented as "suit_value" e.g. "spades_5")
                        card.img_src:string     The image source of the card (!!Deprecated to be replaced with `filename`!!)
                */
                break;
                
                case 'PLAYER_SHOW_CARD_DRAWER':
                /* Show the card drawer. */
                this._controllerFunctions.s(true);
                break;

                case 'PLAYER_HIDE_CARD_DRAWER':
                /* Hide the card drawer. */
                this._controllerFunctions.s(false);
                break;
                
                case 'VIEW_UPDATE_GAMEMASTER':
                /* Forces the client to re-fetch the start screen (using event 'CLIENT_REQUEST_VIEW') if they're not hte master controller. */
                
                break;
                
                case 'VIEW_UPDATE_PLAYERLIST':
                /* Open the player list (in Phase 2) and show all players in the active game to distribute drinks to. 
                    params:
                        card:Card               The card the user has clicked to gain the playerlist action. This card must be kept open (or closed in Easy mode).
                        drink_amt:number        The amount of drinks to distribute.
                        player_buttons:object   Manifest of all players that can be distributed to. Each should get its own HTML button on the playerlist.
                */
                break;

                case 'CLOSE_PLAYERLIST':
                /* Force close the playerlist (because the player has taken too long to answer) */
                break;

                case 'CLOSE_NOTICE':
                /* Force close a notice (because the player has taken too long to interact with it) */
                break;
                
                case 'CLIENT_SORT_CARDS':
                /* Autosort the cards in the player's hands to prepare them for Phase 2. 
                    params:
                        timeout:number          Time in ms before the cards should be closed
                */
                break;
                
                /**
                 * Joint functions
                 */
                case 'VIEW_UPDATE':
                /* A new view has been received.
                    params:
                        __ignore_master_spectator:boolean Overrides the 'local.spectator' property of a client.
                        _filename:string        The file name of the partial to be fetched.
                        _content:string         Raw HTML data to place in the view. Required if `_filename` is empty or undefined.
                        _inject:string          Specify the DOM element to place the new partial in. Required if `content` is used.
                        _append:boolean         Appends the content to the DOM (children of element) instead of overwriting the contents of the element.
                        _no_fadeout:boolean     Don't play the fadeout animation when setting the new view.
                */
                break;

                case 'VIEW_UPDATE_REMOVE':
                /* Remove an element from the view.
                    params:
                        _element:string         The element (including children) to remove.
                */
                break;
                
                case 'UPDATE_DRINK_AMT':
                /* Update the Drinks counter.
                    params:
                        drinks:number           The updated drinks count.
                        player_id:number        (Desktop only) The player whose drink count should be updated.
                */
                break;
                
                case 'NOTICE':
                /* Display a notification to the player and/or the screen.
                    params:
                        notice_id:string        The ID of the notification (Can be random)
                        message:string          The message content. Can include HTML tags (for styling)
                */
                break;
                
                /**
                 * Game / Desktop functions
                 */
                case 'UPDATE_ACTIVE_PLAYER':
                /* Update the highlight indicating the current active player.
                    params:
                        player_id:number        The ID of the new active player.
                */
                break;

                case 'CLIENT_REQUEST_VIEW':
                /* A client requested the start view.
                    device_id:number            The origin device's ID
                */
                break;
                
                case 'DISTRIBUTE_UPDATE':
                /* Update a Phase 2 distribution (Offending player has chosen a recipient in their playerlist.)
                    params:
                        distribution_id:string  The ID of the distribution of the offending player
                        recipient_id:number     The player ID of the recipient.
                */
                break;
                
                case 'DISTRIBUTE_ACKNOWLEDGE':
                /* Recipient of a distribution has acknowledged it and drank their distribution.
                    params:
                        distribution_id:string  The ID of the distribution the recipient is currently playing on.
                */
                break;
                
                case 'FUNCTION':
                break;
                
                case 'CLIENT_ANSWER':
                /* A player has sent an answer
                    params:
                        query:string           The player's answer.
                */
                break;
                
                case 'CLIENT_CARD':
                /* A player has presented a card
                    params
                        card:Card              The player's card.
                */
                break;
            }            
        }
    }
}

export class AirConsoleFunctions {
    /**
     * Send an event to a single device.
     * @param device_id The recipient's AirConsole Device ID
     * @param data The event name and accompanying parameters
     */
    public send(device_id: number, data: AirConsoleData): void {
        airConsole.message(device_id, data);
    }

    /**
     * Broadcast an event to all devices (except this one)
     * @param data The event name and accompanying parameters
     */
    public broadcast(data: AirConsoleData): void {
        airConsole.message(undefined, data);
    }
}