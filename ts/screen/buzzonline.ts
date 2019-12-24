
/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
import Preloader    from "./buzzonline_preloader";
import * as _v      from "./buzzonline_vars";
import { iBuzzOnline, GameAssets, GameState, Observer } from "./buzzonline_interfaces";
import AirConsoleAdapter from "./buzzonline_airconsole_adapter";
import GameStateHandler from "./buzzonline_gamestatehandler";
import Cards from "./buzzonline_cards";
import ScreenHandler from "./buzzonline_screen";

window.onload = (_e: Event) => {
    new BuzzOnline().load();
}

class BuzzOnline implements iBuzzOnline, Observer {

    private adapter: AirConsoleAdapter;

    load(): void {
        //Start the preloader, then the init script
        new Preloader().load(_v.PRLD_IMG, _v.PRLD_AUD).then(__assets => this.init(__assets))
    }
    
    init(__assets: GameAssets): void {
        //Init script goes here

        //Subscribe to the AirConsole adapter
        this.adapter = new AirConsoleAdapter(false);
        this.adapter.attach(this);

        //Start the AirConsole listeners
        this.adapter.start_device_connection_listener();

    }

    start(): void {
        //Init the game state
        console.log("GAME START");
        const gameHandler = new GameStateHandler().initDefault();

        const screenHandler = new ScreenHandler()
        
        screenHandler.view("screen_start");
    }

    /* Get an observeable update */
    update(state: number): void {
        switch(state) {
            case _v.N_GSTART:
                //Game Start; start the main handler
                this.start();
                break;
            default:
                throw new Error('Cannot determine valid observable update ' + state.toString());
        }
    }
}