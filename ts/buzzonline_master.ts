/// <reference path="../node_modules/airconsole-typescript/airconsole-typescript.d.ts" />

/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
import Cards        from "./buzzonline_cards";
import Preloader    from "./buzzonline_preloader";
import Audio        from "./buzzonline_audio";
import * as _v      from "./buzzonline_vars";
import GameState    from "./buzzonline_gamestatehandler";
import { iGameData }from "./buzzonline_interfaces";

/****
 * Global declarations
 */
declare global {

    /**
     * The global Game Data object.
     * 
     * Holds the game assets, as well as the current game state.
     */
    var gameData: iGameData;

    /**
     * The global AirConsole object.
     */
    var airConsole: AirConsole;

    /**
     * The local storage parameters.
     */
    var localStorage: Storage;
}

window.onload = (_e: Event) => {
    // var cardstack = cards.generate()
    // console.log(cardstack);
    // var card = cards.deal(cardstack);
    // console.log(card, cardstack);
    // var card = cards.deal(cardstack, true);
    // console.log(card, cardstack);
    // var card = cards.deal(cardstack, false, true);
    // console.log(card, cardstack);
    // var card = cards.deal(cardstack, true, true);
    // console.log(card, cardstack);

    const buzzOnline = new BuzzOnline();

}


class BuzzOnline {
    private _gameData: iGameData;
    private _airConsole: AirConsole;

    constructor() {
        this._airConsole = new AirConsole({
            orientation: AirConsole.ORIENTATION_LANDSCAPE,
            setup_document: false
        });
        let gameState = new GameState;
        this._gameData = {
            gameState: gameState,
            assets: null
        }

        const preloader  = new Preloader();
        
        preloader.load(_v.PRLD_IMG, _v.PRLD_AUD)
        .then(gameassets => {
            var cards = new Cards().generate();
            this._gameData.assets = gameassets;
            this._gameData.gameState.cardStack = cards;
            new Audio().play(gameData.assets.audioBuffer["bgmusic.wav"], true, 1);
            console.log(gameData);
        }).catch(e => { throw e });
    }
}