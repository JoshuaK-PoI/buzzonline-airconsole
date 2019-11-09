import { AirConsoleFunctions } from "./buzzonline_airconsole_adapter";

export default class ControllerFunctions {
    private __acf: AirConsoleFunctions;
    private __ls:  Storage;
    constructor() {
        this.__acf = new AirConsoleFunctions();
        this.__ls = localStorage;
    }
    /**
     * join {join}
     * Join the game
     * 
     * @param {boolean} as_spectator Join as spectator
     */
    j(as_spectator:boolean): void {
        this.__ls.setItem('__bo_game_param_spectator', as_spectator.toString());
    }

    /**
     * Show Card Drawer {showCardDrawer}
     * Show the card drawer.
     * @param {boolean} show If true, show the card drawer, else hide the card drawer.
     */
    s(show: boolean): void {
        if(this.__ls.getItem('__bo_game_param_spectator') == 'false') return;
        
        let cd = document.querySelector('.bo-client-cards');
        if(show)
            cd.classList.remove('hidden');
        else
            cd.classList.add('hidden');
    }

    /**
     * View Update GameMaster {viewUpdateGamemaster}
     * Check if the view needs to be refetched (in case game master device ID has changed)
     */
    v(): void {
        if(this.__ls.getItem('__bo_game_param_master_controller') == 'true' && 
            airConsole.getMasterControllerDeviceId() != airConsole.getDeviceId()) {
            /* Refetch the start screen if we're not the master controller */
            this.__acf.send(AirConsole.SCREEN, {
                message_id: 'CLIENT_REQUEST_VIEW'
            });
        }
    }
}