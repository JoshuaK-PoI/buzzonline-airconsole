/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/screen/buzzonline.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/controller/buzzonline_controller_functions.ts":
/*!**********************************************************!*\
  !*** ./ts/controller/buzzonline_controller_functions.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_airconsole_adapter_1 = __webpack_require__(/*! ../screen/buzzonline_airconsole_adapter */ "./ts/screen/buzzonline_airconsole_adapter.ts");
var ControllerFunctions = /** @class */ (function () {
    function ControllerFunctions() {
        this.__acf = new buzzonline_airconsole_adapter_1.AirConsoleFunctions();
        this.__ls = localStorage;
    }
    /**
     * join {join}
     * Join the game
     *
     * @param {boolean} as_spectator Join as spectator
     */
    ControllerFunctions.prototype.join = function (as_spectator) {
        this.__ls.setItem('__bo_game_param_spectator', as_spectator.toString());
    };
    /**
     * Show Card Drawer {showCardDrawer}
     * Show the card drawer.
     * @param {boolean} show If true, show the card drawer, else hide the card drawer.
     */
    ControllerFunctions.prototype.showCardDrawer = function (show) {
        if (this.__ls.getItem('__bo_game_param_spectator') == 'false')
            return;
        var cd = document.querySelector('.bo-client-cards');
        if (show)
            cd.classList.remove('hidden');
        else
            cd.classList.add('hidden');
    };
    /**
     * View Update GameMaster {viewUpdateGamemaster}
     * Check if the view needs to be refetched (in case game master device ID has changed)
     */
    ControllerFunctions.prototype.viewUpdateGamemaster = function () {
        if (this.__ls.getItem('__bo_game_param_master_controller') == 'true') {
            // @TODO: Ask the AirconsoleAdapter for the master controller information
            // && __AIRCONSOLE__.getMasterControllerDeviceId() != __AIRCONSOLE__.getDeviceId()) {
            /* Refetch the start screen if we're not the master controller */
            this.__acf.send(AirConsole.SCREEN, {
                message_id: 'CLIENT_REQUEST_VIEW'
            });
        }
    };
    return ControllerFunctions;
}());
exports.default = ControllerFunctions;


/***/ }),

/***/ "./ts/screen/buzzonline.ts":
/*!*********************************!*\
  !*** ./ts/screen/buzzonline.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
var buzzonline_preloader_1 = __webpack_require__(/*! ./buzzonline_preloader */ "./ts/screen/buzzonline_preloader.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/screen/buzzonline_vars.ts");
var buzzonline_airconsole_adapter_1 = __webpack_require__(/*! ./buzzonline_airconsole_adapter */ "./ts/screen/buzzonline_airconsole_adapter.ts");
var buzzonline_gamestatehandler_1 = __webpack_require__(/*! ./buzzonline_gamestatehandler */ "./ts/screen/buzzonline_gamestatehandler.ts");
var buzzonline_screen_1 = __webpack_require__(/*! ./buzzonline_screen */ "./ts/screen/buzzonline_screen.ts");
window.onload = function (_e) {
    new BuzzOnline().load();
};
var BuzzOnline = /** @class */ (function () {
    function BuzzOnline() {
    }
    BuzzOnline.prototype.load = function () {
        var _this = this;
        //Start the preloader, then the init script
        new buzzonline_preloader_1.default().load(_v.PRLD_IMG, _v.PRLD_AUD).then(function (__assets) { return _this.init(__assets); });
    };
    BuzzOnline.prototype.init = function (__assets) {
        //Init script goes here
        //Subscribe to the AirConsole adapter
        this.adapter = new buzzonline_airconsole_adapter_1.default(false);
        this.adapter.attach(this);
        //Start the AirConsole listeners
        this.adapter.start_device_connection_listener();
    };
    BuzzOnline.prototype.start = function () {
        //Init the game state
        console.log("GAME START");
        var gameHandler = new buzzonline_gamestatehandler_1.default().initDefault();
        var screenHandler = new buzzonline_screen_1.default();
        screenHandler.view("screen_start");
    };
    /* Get an observeable update */
    BuzzOnline.prototype.update = function (state) {
        switch (state) {
            case _v.N_GSTART:
                //Game Start; start the main handler
                this.start();
                break;
            default:
                throw new Error('Cannot determine valid observable update ' + state.toString());
        }
    };
    return BuzzOnline;
}());


/***/ }),

/***/ "./ts/screen/buzzonline_airconsole_adapter.ts":
/*!****************************************************!*\
  !*** ./ts/screen/buzzonline_airconsole_adapter.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../node_modules/airconsole-typescript/airconsole-typescript.d.ts" />
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_controller_functions_1 = __webpack_require__(/*! ../controller/buzzonline_controller_functions */ "./ts/controller/buzzonline_controller_functions.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/screen/buzzonline_vars.ts");
var AirConsoleAdapter = /** @class */ (function () {
    function AirConsoleAdapter(isMobile) {
        var _this = this;
        /* Observable logic */
        this.observers = [];
        this._isMobile = isMobile;
        this._controllerFunctions = new buzzonline_controller_functions_1.default;
        if (!_v.__DEBUG_MODE) {
            /* Install AirConsole API */
            this.airConsole = new AirConsole();
            this.airConsole.onReady = function () { return _this.notify(_v.N_GSTART); };
        }
        else {
            setTimeout(function () { return _this.notify(_v.N_GSTART); }, 1000);
        }
    }
    AirConsoleAdapter.prototype.start_device_message_listener = function () {
        var _this = this;
        this.airConsole.onMessage = function (device_id, data) {
            switch (data.message_id) {
                /**
                 * Controller-only functions
                 */
                case 'JOINED_AS_SPECTATOR':
                    /* New player has joined in an active game, so should join as spectator */
                    _this._controllerFunctions.join(true);
                    break;
                case 'JOIN_GAME':
                    /* New player has joined an idle game */
                    _this._controllerFunctions.join(false);
                    break;
                case 'CONTROLLER_VIBRATE':
                    /* Vibrate the controller
                        params:
                            time:number | Array<number> Time in ms to vibrate the controller for, or vibration pattern
                    */
                    navigator.vibrate(data.params['time']);
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
                    _this._controllerFunctions.showCardDrawer(true);
                    break;
                case 'PLAYER_HIDE_CARD_DRAWER':
                    /* Hide the card drawer. */
                    _this._controllerFunctions.showCardDrawer(false);
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
                default:
                    throw new Error("Error: Unknown function message received in Airconsole Adapter listener: " + data.message_id);
            }
        };
    };
    AirConsoleAdapter.prototype.start_device_connection_listener = function () {
        var _this = this;
        if (_v.__DEBUG_MODE) {
            console.warn("AirConsole message listener instantiation skipped, Debug mode engaged.");
            return false;
        }
        //Start the message listener
        this.start_device_message_listener();
        //Start the AirConsole connection listeners
        this.airConsole.onConnect = function (device_id) { return _this.device_connection_handler(device_id); };
        this.airConsole.onDisconnect = function (device_id) { return _this.device_disconnection_handler(device_id); };
    };
    AirConsoleAdapter.prototype.device_connection_handler = function (device_id) {
        //What happens when a device connects?
        console.log("Device connected:", this.airConsole.getNickname(device_id));
        //Notify the observers
        this.notify(_v.N_PCONNECT);
    };
    AirConsoleAdapter.prototype.device_disconnection_handler = function (device_id) {
        //What happens when a device disconnects?
        console.log("Device disconnected:", this.airConsole.getNickname(device_id));
        //Notify the observers
        this.notify(_v.N_PDCONNECT);
    };
    AirConsoleAdapter.prototype.device_send_start = function (device_id) {
        throw new Error("Method not implemented.");
    };
    AirConsoleAdapter.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    AirConsoleAdapter.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    };
    AirConsoleAdapter.prototype.notify = function (state) {
        var e_1, _a;
        try {
            for (var _b = __values(this.observers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.update(state);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return AirConsoleAdapter;
}());
exports.default = AirConsoleAdapter;
var AirConsoleFunctions = /** @class */ (function () {
    function AirConsoleFunctions() {
    }
    /**
     * Send an event to a single device.
     * @param device_id The recipient's AirConsole Device ID
     * @param data The event name and accompanying parameters
     */
    AirConsoleFunctions.prototype.send = function (device_id, data) {
        // @TODO: Create Messenger in AirConsole Adapter
        //__AIRCONSOLE__.message(device_id, data);
    };
    /**
     * Broadcast an event to all devices (except this one)
     * @param data The event name and accompanying parameters
     */
    AirConsoleFunctions.prototype.broadcast = function (data) {
        // @TODO: Create Messenger in AirConsole Adapter
        //__AIRCONSOLE__.message(undefined, data);
    };
    return AirConsoleFunctions;
}());
exports.AirConsoleFunctions = AirConsoleFunctions;


/***/ }),

/***/ "./ts/screen/buzzonline_audio.ts":
/*!***************************************!*\
  !*** ./ts/screen/buzzonline_audio.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_http_1 = __webpack_require__(/*! ./buzzonline_http */ "./ts/screen/buzzonline_http.ts");
var Audio = /** @class */ (function () {
    function Audio() {
        // TODO: The AudioContext cannot start before user interaction with the page.
        this._audioContext = new AudioContext();
        this._audioGain = this._audioContext.createGain();
    }
    /**
     * Preload a file from the local game data into the audio buffer.
     *
     * Fetches the file from the game storage, decodes it in the Audio context and returns the decoded audio buffer.
     *
     * @param {string} file The name of the audio file to load. File extension must be included. Files get loaded from `./dist/audio`
     *
     * @returns {Promise<AudioBuffer>}
     */
    Audio.prototype.preload = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new buzzonline_http_1.default().fetch({
                            method: "GET",
                            uri: "./dist/audio/" + file,
                            responseType: "arraybuffer"
                        }).catch(function (e) { throw e; })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this._audioContext.decodeAudioData(response)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Play a file in the buffer.
     *
     * @param {string}  file    The name of the file to play. File extension must be included.
     * @param {boolean} repeat  Loop the audio when it reaches the end. Default `false`.
     * @param {number}  gain    Gain control for the gloabal audio context. Default 0.2
     */
    Audio.prototype.play = function (audioBuffer, repeat, gain) {
        if (repeat === void 0) { repeat = false; }
        if (gain === void 0) { gain = 0.2; }
        var source = this._audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this._audioGain);
        this._audioGain.connect(this._audioContext.destination);
        this._audioGain.gain.setValueAtTime(gain, this._audioContext.currentTime);
        source.loop = repeat;
        source.start(0);
    };
    return Audio;
}());
exports.default = Audio;


/***/ }),

/***/ "./ts/screen/buzzonline_cards.ts":
/*!***************************************!*\
  !*** ./ts/screen/buzzonline_cards.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_helpers_1 = __webpack_require__(/*! ./buzzonline_helpers */ "./ts/screen/buzzonline_helpers.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/screen/buzzonline_vars.ts");
var Cards = /** @class */ (function () {
    function Cards() {
    }
    /**
     * Generates a new shuffled deck of cards
     *
     * @param {boolean} [jokers=false] Add Jokers to the deck. Default `false`.
     * @returns {Card[]} cardStack: `Card[]`
     * @memberof Cards
     */
    Cards.prototype.generate = function (jokers) {
        var e_1, _a, e_2, _b;
        if (jokers === void 0) { jokers = false; }
        var cardStack = new Array();
        /* Declare Suits */
        var suits = [_v.SUIT_C, _v.SUIT_D, _v.SUIT_H, _v.SUIT_S];
        /* Add Jokers to suits */
        if (jokers)
            suits.push(_v.SUIT_B, _v.SUIT_R);
        /* Declare Values */
        var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        try {
            /* item: suit */
            for (var _c = __values(buzzonline_helpers_1.forIndex(suits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, item = _e.item, index = _e.index;
                try {
                    for (var values_1 = (e_2 = void 0, __values(values)), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                        var value = values_1_1.value;
                        /* Set the JOKER value if the suit is of type joker */
                        if ([_v.SUIT_B, _v.SUIT_R].indexOf(item) !== -1)
                            value = _v.VALU_J;
                        /* Push the card onto the deck */
                        cardStack.push({
                            color: [_v.SUIT_D, _v.SUIT_H, _v.SUIT_R].indexOf(item) == -1 ? _v.COLO_B : _v.COLO_R,
                            html: "" + _v.HTML_BOCARD + item[0].toUpperCase() + value,
                            rank: this._calculate_rank({ suit_i: index, value: value }),
                            suit: item,
                            value: value
                        });
                        /* End the loop after 1 card if Jokers are being generated */
                        if ([_v.SUIT_B, _v.SUIT_R].indexOf(item) !== -1)
                            break;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (values_1_1 && !values_1_1.done && (_b = values_1.return)) _b.call(values_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this._shuffle(cardStack);
    };
    /**
     * Deal a card from the provided deck.
     *
     * @param {Card[]} cardStack The deck to deal a card from
     * @param {boolean} [deleteCardFromStack=false] Delete the card from the deck after dealing it. Default `false`.
     * @param {boolean} [getFromEnd=false] Get the card from the bottom (end) of the deck. Default `false`.
     * @returns {Card} card
     * @memberof Cards
     */
    Cards.prototype.deal = function (cardStack, deleteCardFromStack, getFromEnd) {
        if (deleteCardFromStack === void 0) { deleteCardFromStack = false; }
        if (getFromEnd === void 0) { getFromEnd = false; }
        if (deleteCardFromStack)
            return getFromEnd ? cardStack.pop() : cardStack.shift(); //Removes the card from the stack array, then returns it
        else
            return getFromEnd ? cardStack.slice(-1)[0] : cardStack[0]; //Returns the card from the stack array
    };
    Cards.prototype._calculate_rank = function (_a) {
        var suit_i = _a.suit_i, value = _a.value;
        return (4 * (value - 2)) + suit_i;
    };
    Cards.prototype._shuffle = function (stack) {
        var _a;
        for (var i = stack.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = __read([stack[j], stack[i]], 2), stack[i] = _a[0], stack[j] = _a[1];
        }
        return stack;
    };
    return Cards;
}());
exports.default = Cards;


/***/ }),

/***/ "./ts/screen/buzzonline_gamestatehandler.ts":
/*!**************************************************!*\
  !*** ./ts/screen/buzzonline_gamestatehandler.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_cards_1 = __webpack_require__(/*! ./buzzonline_cards */ "./ts/screen/buzzonline_cards.ts");
var GameStateHandler = /** @class */ (function () {
    function GameStateHandler() {
    }
    GameStateHandler.prototype.initDefault = function () {
        // Fill handler with init data
        this._cardStack = new buzzonline_cards_1.default().generate();
        this._currentAnswer = "";
        this._currentCard = 0;
        this._currentPlayer = 0;
        this._currentRow = 0;
        this._distributions = [];
        this._masterDeviceId = 0;
        this._masterNickname = "";
        this._phase = 0;
        this._players = [];
        this._showdown = null;
        this._subPhase = 0;
        this._rounds = 0;
        this._inProgress = false;
        return this;
    };
    GameStateHandler.prototype.init = function (gameState) {
        //Manually set the game state init
        for (var key in gameState) {
            if (gameState.hasOwnProperty(key)) {
                this['_' + key] = gameState[key];
            }
        }
    };
    GameStateHandler.prototype.get = function (parameter) {
        //Return the requested parameter
        return this['_' + parameter];
    };
    GameStateHandler.prototype.set = function (parameter, data) {
        //Check for valid type
        if (typeof data !== typeof this['_' + parameter])
            throw new Error("Invalid type for parameter " + parameter + '; expected' + typeof this['_' + parameter] + ', got ' + typeof data);
        //Set the parameter and return
        this['_' + parameter] = data;
        return;
    };
    return GameStateHandler;
}());
exports.default = GameStateHandler;


/***/ }),

/***/ "./ts/screen/buzzonline_helpers.ts":
/*!*****************************************!*\
  !*** ./ts/screen/buzzonline_helpers.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
function forIndex(items) {
    var index, items_1, items_1_1, item, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                index = 0;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 8]);
                items_1 = __values(items), items_1_1 = items_1.next();
                _b.label = 2;
            case 2:
                if (!!items_1_1.done) return [3 /*break*/, 5];
                item = items_1_1.value;
                return [4 /*yield*/, { item: item, index: index }];
            case 3:
                _b.sent();
                index++;
                _b.label = 4;
            case 4:
                items_1_1 = items_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
exports.forIndex = forIndex;


/***/ }),

/***/ "./ts/screen/buzzonline_http.ts":
/*!**************************************!*\
  !*** ./ts/screen/buzzonline_http.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Http = /** @class */ (function () {
    function Http() {
    }
    /**
     * Fetches a file from the server
     *
     * @param {HttpOptions} options HTTP options: `responseType` {XMLHttpRequestResponseType}, `method` {string}, `uri`: {string}
     */
    Http.prototype.fetch = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.responseType = options.responseType;
                        xhr.open(options.method, options.uri, true);
                        xhr.send();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState !== xhr.DONE)
                                return;
                            if (xhr.status >= 200 && xhr.status < 300)
                                resolve(options.responseType == "text" ? xhr.responseText : xhr.response);
                            else
                                reject(xhr.statusText);
                        };
                    })];
            });
        });
    };
    return Http;
}());
exports.default = Http;


/***/ }),

/***/ "./ts/screen/buzzonline_preloader.ts":
/*!*******************************************!*\
  !*** ./ts/screen/buzzonline_preloader.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_audio_1 = __webpack_require__(/*! ./buzzonline_audio */ "./ts/screen/buzzonline_audio.ts");
var Preloader = /** @class */ (function () {
    function Preloader() {
        this._toLoad = this._loaded = 0;
    }
    /**
     * Preload image and sound assets from the server.
     *
     * @param images Array of image files. Specify location and file extension. Root is `./dist/img/`.
     * @param sounds Array of sound files. Specify location, no file extension. Root is `./dist/audio`.
     *
     * @returns {Promise<GameAssets>} {audioBuffer, imageBuffer}
     */
    Preloader.prototype.load = function (images, sounds) {
        return __awaiter(this, void 0, void 0, function () {
            var audioBuffer, imageBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._toLoad = images.length + sounds.length;
                        return [4 /*yield*/, this._loadSounds(sounds).catch(function (e) { throw e; })];
                    case 1:
                        audioBuffer = _a.sent();
                        return [4 /*yield*/, this._loadImages(images).catch(function (e) { throw e; })];
                    case 2:
                        imageBuffer = _a.sent();
                        return [2 /*return*/, { imageBuffer: imageBuffer, audioBuffer: audioBuffer }];
                }
            });
        });
    };
    Preloader.prototype._loadSounds = function (sounds) {
        return __awaiter(this, void 0, void 0, function () {
            var audioBufferArray, sounds_1, sounds_1_1, s, soundName, _a, _b, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        audioBufferArray = Array();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        sounds_1 = __values(sounds), sounds_1_1 = sounds_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!sounds_1_1.done) return [3 /*break*/, 5];
                        s = sounds_1_1.value;
                        soundName = s.split('/').pop();
                        _a = audioBufferArray;
                        _b = soundName;
                        return [4 /*yield*/, new buzzonline_audio_1.default().preload(s).catch(function (e) { throw e; })];
                    case 3:
                        _a[_b] = _d.sent();
                        this._updateProgressBar();
                        _d.label = 4;
                    case 4:
                        sounds_1_1 = sounds_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (sounds_1_1 && !sounds_1_1.done && (_c = sounds_1.return)) _c.call(sounds_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, audioBufferArray];
                }
            });
        });
    };
    Preloader.prototype._loadImages = function (images) {
        return __awaiter(this, void 0, void 0, function () {
            var HTMLImageElementArray, images_1, images_1_1, i, imageName, _a, _b, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        HTMLImageElementArray = Array();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        images_1 = __values(images), images_1_1 = images_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!images_1_1.done) return [3 /*break*/, 5];
                        i = images_1_1.value;
                        imageName = i.split('/').pop();
                        _a = HTMLImageElementArray;
                        _b = imageName;
                        return [4 /*yield*/, this._loadImage(i).catch(function (e) { throw e; })];
                    case 3:
                        _a[_b] = _d.sent();
                        this._updateProgressBar();
                        _d.label = 4;
                    case 4:
                        images_1_1 = images_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (images_1_1 && !images_1_1.done && (_c = images_1.return)) _c.call(images_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, HTMLImageElementArray];
                }
            });
        });
    };
    Preloader.prototype._loadImage = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var image = new Image();
                        image.src = "./dist/img/" + file;
                        image.onerror = function (e) { return reject(e); };
                        image.onload = function (e) { return resolve(image); };
                    })];
            });
        });
    };
    Preloader.prototype._updateProgressBar = function () {
        this._loaded++;
        var e = document.querySelector('.loader-progress--bar');
        e.style.width = (100 * (this._loaded / this._toLoad)) + '%';
        document.querySelector('.loader-text').innerHTML = "Loading... " + this._loaded + "/" + this._toLoad;
    };
    return Preloader;
}());
exports.default = Preloader;


/***/ }),

/***/ "./ts/screen/buzzonline_screen.ts":
/*!****************************************!*\
  !*** ./ts/screen/buzzonline_screen.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var buzzonline_http_1 = __webpack_require__(/*! ./buzzonline_http */ "./ts/screen/buzzonline_http.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/screen/buzzonline_vars.ts");
var ScreenHandler = /** @class */ (function () {
    function ScreenHandler() {
    }
    /**
     * Show the requested view. To use all parameters, use the `show` function.
     *
     * @param {string} file The name of the screen file
     */
    ScreenHandler.prototype.view = function (file) {
        console.log("Showing " + file + "...");
        this.show({
            file: file,
            params: {
                _content: "",
                _append: false,
                _no_fadeout: false,
                _enlarge_view: false,
                _restore_view: false
            }
        });
    };
    /**
     * Show the requested view file with optional parameters
     *
     * @param {ScreenHandlerOptions} options Screen handler options
     */
    ScreenHandler.prototype.show = function (options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var template, res_1, querySelector_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof (options.file) !== "undefined")) return [3 /*break*/, 2];
                        return [4 /*yield*/, new buzzonline_http_1.default().fetch({
                                method: _v.METH_GET,
                                uri: "./dist/templates/_" + options.file + ".html?_" + new Date().getTime(),
                                responseType: _v.RETY_TEXT
                            })];
                    case 1:
                        template = _b.sent();
                        res_1 = this.buildTemplate(template, options.params);
                        querySelector_1 = (_a = options.params._inject, (_a !== null && _a !== void 0 ? _a : '#bo_viewport'));
                        if (options.params._enlarge_view)
                            this._enlargeView();
                        if (options.params._restore_view)
                            this._restoreView();
                        if (options.params._append) {
                            document.querySelector(querySelector_1).insertAdjacentHTML('beforeend', res_1);
                        }
                        else {
                            /* Fade animation if view gets replaced */
                            if (querySelector_1 == '#bo_viewport' && !options.params._no_fadeout) {
                                document.querySelector(querySelector_1).classList.add('fadeout');
                                setTimeout(function () {
                                    document.querySelector(querySelector_1).innerHTML = res_1;
                                    setTimeout(function () {
                                        document.querySelector(querySelector_1).classList.remove('fadeout');
                                    }, 100);
                                }, 200);
                            }
                            else {
                                document.querySelector(querySelector_1).innerHTML = res_1;
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        // No file, assume _inject and _content in options.params:
                        if (typeof (options.params._inject) == 'undefined' || typeof (options.params._content) == 'undefined')
                            throw new Error('Missing data for content replacement!');
                        if (options.params._append) {
                            document.querySelector(options.params._inject).insertAdjacentHTML('beforeend', options.params._content);
                        }
                        else {
                            document.querySelector(options.params._inject).innerHTML = options.params._content;
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScreenHandler.prototype._enlargeView = function () {
        document.querySelector('.bo-client-container').classList.add('smaller');
        document.querySelector('.bo-client-cards').classList.add('larger');
    };
    ScreenHandler.prototype._restoreView = function () {
        document.querySelector('.bo-client-container').classList.remove('smaller');
        document.querySelector('.bo-client-cards').classList.remove('larger');
    };
    ScreenHandler.prototype.buildTemplate = function (file, params) {
        if (typeof params === 'object') {
            for (var key in params)
                file = file.replace(new RegExp("{" + key + "}", 'g'), params[key]);
        }
        return file;
    };
    return ScreenHandler;
}());
exports.default = ScreenHandler;


/***/ }),

/***/ "./ts/screen/buzzonline_vars.ts":
/*!**************************************!*\
  !*** ./ts/screen/buzzonline_vars.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Variables used in BuzzOnline */
Object.defineProperty(exports, "__esModule", { value: true });
/****
    *
    *
    * Constants - Texts, constant numbers and configurable game options
    *
    *
****/
/* Game / Engine settings */
exports.__DEBUG_MODE = true;
exports.PHS_TMOUT = 2000;
/* AirConsole Adapter notification states */
exports.N_GSTART = 100;
exports.N_PCONNECT = 201;
exports.N_PDCONNECT = 202;
exports.N_PNOTIF = 203;
/* Standard Texts */
exports.SUIT_H = "hearts";
exports.SUIT_S = "spades";
exports.SUIT_C = "clubs";
exports.SUIT_D = "diamonds";
exports.SUIT_B = "blackjoker";
exports.SUIT_R = "redjoker";
exports.COLO_R = "red";
exports.COLO_B = "black";
exports.VALU_J = 14;
exports.HTML_BOCARD = "buzzonline__playingcard_";
exports.METH_GET = 'GET';
exports.RETY_ABFR = "arraybuffer";
exports.RETY_TEXT = "text";
/* Player Prompts */
/* Console Prompts / Debugging */
exports.CONS_ERR_AUDIO_NOT_INSTANTIATABLE = "Could not instantiate audio engine. Audio is not supported.";
/* Preloader: Images */
exports.PRLD_IMG = [
    "buzzonline-Logo4x.png",
    "cards/buzzonline__playingcard_back.png",
    "cards/buzzonline__playingcard_C2.png",
    "cards/buzzonline__playingcard_C3.png",
    "cards/buzzonline__playingcard_C4.png",
    "cards/buzzonline__playingcard_C5.png",
    "cards/buzzonline__playingcard_C6.png",
    "cards/buzzonline__playingcard_C7.png",
    "cards/buzzonline__playingcard_C8.png",
    "cards/buzzonline__playingcard_C9.png",
    "cards/buzzonline__playingcard_C10.png",
    "cards/buzzonline__playingcard_C11.png",
    "cards/buzzonline__playingcard_C12.png",
    "cards/buzzonline__playingcard_C13.png",
    "cards/buzzonline__playingcard_C14.png",
    "cards/buzzonline__playingcard_D2.png",
    "cards/buzzonline__playingcard_D3.png",
    "cards/buzzonline__playingcard_D4.png",
    "cards/buzzonline__playingcard_D5.png",
    "cards/buzzonline__playingcard_D6.png",
    "cards/buzzonline__playingcard_D7.png",
    "cards/buzzonline__playingcard_D8.png",
    "cards/buzzonline__playingcard_D9.png",
    "cards/buzzonline__playingcard_D10.png",
    "cards/buzzonline__playingcard_D11.png",
    "cards/buzzonline__playingcard_D12.png",
    "cards/buzzonline__playingcard_D13.png",
    "cards/buzzonline__playingcard_D14.png",
    "cards/buzzonline__playingcard_H2.png",
    "cards/buzzonline__playingcard_H3.png",
    "cards/buzzonline__playingcard_H4.png",
    "cards/buzzonline__playingcard_H5.png",
    "cards/buzzonline__playingcard_H6.png",
    "cards/buzzonline__playingcard_H7.png",
    "cards/buzzonline__playingcard_H8.png",
    "cards/buzzonline__playingcard_H9.png",
    "cards/buzzonline__playingcard_H10.png",
    "cards/buzzonline__playingcard_H11.png",
    "cards/buzzonline__playingcard_H12.png",
    "cards/buzzonline__playingcard_H13.png",
    "cards/buzzonline__playingcard_H14.png",
    "cards/buzzonline__playingcard_S2.png",
    "cards/buzzonline__playingcard_S3.png",
    "cards/buzzonline__playingcard_S4.png",
    "cards/buzzonline__playingcard_S5.png",
    "cards/buzzonline__playingcard_S6.png",
    "cards/buzzonline__playingcard_S7.png",
    "cards/buzzonline__playingcard_S8.png",
    "cards/buzzonline__playingcard_S9.png",
    "cards/buzzonline__playingcard_S10.png",
    "cards/buzzonline__playingcard_S11.png",
    "cards/buzzonline__playingcard_S12.png",
    "cards/buzzonline__playingcard_S13.png",
    "cards/buzzonline__playingcard_S14.png"
];
/* Preloader: Audio */
exports.PRLD_AUD = [
    "playercorrect.wav",
    "assignplayer.wav",
    "completedistribution.wav",
    "playermissed.wav",
    "playerwrong.wav",
    "startdistribution.wav",
    "bgmusic.wav"
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvY29udHJvbGxlci9idXp6b25saW5lX2NvbnRyb2xsZXJfZnVuY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3RzL3NjcmVlbi9idXp6b25saW5lLnRzIiwid2VicGFjazovLy8uL3RzL3NjcmVlbi9idXp6b25saW5lX2FpcmNvbnNvbGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi90cy9zY3JlZW4vYnV6em9ubGluZV9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi90cy9zY3JlZW4vYnV6em9ubGluZV9jYXJkcy50cyIsIndlYnBhY2s6Ly8vLi90cy9zY3JlZW4vYnV6em9ubGluZV9nYW1lc3RhdGVoYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL3NjcmVlbi9idXp6b25saW5lX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2NyZWVuL2J1enpvbmxpbmVfaHR0cC50cyIsIndlYnBhY2s6Ly8vLi90cy9zY3JlZW4vYnV6em9ubGluZV9wcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2NyZWVuL2J1enpvbmxpbmVfc2NyZWVuLnRzIiwid2VicGFjazovLy8uL3RzL3NjcmVlbi9idXp6b25saW5lX3ZhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7Q0FDMUMsQ0FBQztBQUVGLHNCQUFzQjtBQUNULGdCQUFRLEdBQWtCO0lBQ25DLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEIsQ0FBQyIsImZpbGUiOiJhcHBfZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL3NjcmVlbi9idXp6b25saW5lLnRzXCIpO1xuIiwiaW1wb3J0IHsgQWlyQ29uc29sZUZ1bmN0aW9ucyB9IGZyb20gXCIuLi9zY3JlZW4vYnV6em9ubGluZV9haXJjb25zb2xlX2FkYXB0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlckZ1bmN0aW9ucyB7XG4gICAgcHJpdmF0ZSBfX2FjZjogQWlyQ29uc29sZUZ1bmN0aW9ucztcbiAgICBwcml2YXRlIF9fbHM6ICBTdG9yYWdlO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9fYWNmID0gbmV3IEFpckNvbnNvbGVGdW5jdGlvbnMoKTtcbiAgICAgICAgdGhpcy5fX2xzID0gbG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBqb2luIHtqb2lufVxuICAgICAqIEpvaW4gdGhlIGdhbWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFzX3NwZWN0YXRvciBKb2luIGFzIHNwZWN0YXRvclxuICAgICAqL1xuICAgIGpvaW4oYXNfc3BlY3RhdG9yOmJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fX2xzLnNldEl0ZW0oJ19fYm9fZ2FtZV9wYXJhbV9zcGVjdGF0b3InLCBhc19zcGVjdGF0b3IudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBDYXJkIERyYXdlciB7c2hvd0NhcmREcmF3ZXJ9XG4gICAgICogU2hvdyB0aGUgY2FyZCBkcmF3ZXIuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzaG93IElmIHRydWUsIHNob3cgdGhlIGNhcmQgZHJhd2VyLCBlbHNlIGhpZGUgdGhlIGNhcmQgZHJhd2VyLlxuICAgICAqL1xuICAgIHNob3dDYXJkRHJhd2VyKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5fX2xzLmdldEl0ZW0oJ19fYm9fZ2FtZV9wYXJhbV9zcGVjdGF0b3InKSA9PSAnZmFsc2UnKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBsZXQgY2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm8tY2xpZW50LWNhcmRzJyk7XG4gICAgICAgIGlmKHNob3cpXG4gICAgICAgICAgICBjZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmlldyBVcGRhdGUgR2FtZU1hc3RlciB7dmlld1VwZGF0ZUdhbWVtYXN0ZXJ9XG4gICAgICogQ2hlY2sgaWYgdGhlIHZpZXcgbmVlZHMgdG8gYmUgcmVmZXRjaGVkIChpbiBjYXNlIGdhbWUgbWFzdGVyIGRldmljZSBJRCBoYXMgY2hhbmdlZClcbiAgICAgKi9cbiAgICB2aWV3VXBkYXRlR2FtZW1hc3RlcigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5fX2xzLmdldEl0ZW0oJ19fYm9fZ2FtZV9wYXJhbV9tYXN0ZXJfY29udHJvbGxlcicpID09ICd0cnVlJykge1xuICAgICAgICAgICAgLy8gQFRPRE86IEFzayB0aGUgQWlyY29uc29sZUFkYXB0ZXIgZm9yIHRoZSBtYXN0ZXIgY29udHJvbGxlciBpbmZvcm1hdGlvblxuICAgICAgICAgICAgLy8gJiYgX19BSVJDT05TT0xFX18uZ2V0TWFzdGVyQ29udHJvbGxlckRldmljZUlkKCkgIT0gX19BSVJDT05TT0xFX18uZ2V0RGV2aWNlSWQoKSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiBSZWZldGNoIHRoZSBzdGFydCBzY3JlZW4gaWYgd2UncmUgbm90IHRoZSBtYXN0ZXIgY29udHJvbGxlciAqL1xuICAgICAgICAgICAgdGhpcy5fX2FjZi5zZW5kKEFpckNvbnNvbGUuU0NSRUVOLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZV9pZDogJ0NMSUVOVF9SRVFVRVNUX1ZJRVcnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbi8qKlxuICogQnV6ek9ubGluZSAtIFRoZSBBaXJDb25zb2xlIEFkYXB0YWlvblxuICogYnkgUG93ZXIgb2YgSW50ZXJlc3QgLSAyMDE5XG4gKlxuICovXG5pbXBvcnQgUHJlbG9hZGVyICAgIGZyb20gXCIuL2J1enpvbmxpbmVfcHJlbG9hZGVyXCI7XG5pbXBvcnQgKiBhcyBfdiAgICAgIGZyb20gXCIuL2J1enpvbmxpbmVfdmFyc1wiO1xuaW1wb3J0IHsgaUJ1enpPbmxpbmUsIEdhbWVBc3NldHMsIEdhbWVTdGF0ZSwgT2JzZXJ2ZXIgfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcbmltcG9ydCBBaXJDb25zb2xlQWRhcHRlciBmcm9tIFwiLi9idXp6b25saW5lX2FpcmNvbnNvbGVfYWRhcHRlclwiO1xuaW1wb3J0IEdhbWVTdGF0ZUhhbmRsZXIgZnJvbSBcIi4vYnV6em9ubGluZV9nYW1lc3RhdGVoYW5kbGVyXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vYnV6em9ubGluZV9jYXJkc1wiO1xuaW1wb3J0IFNjcmVlbkhhbmRsZXIgZnJvbSBcIi4vYnV6em9ubGluZV9zY3JlZW5cIjtcblxud2luZG93Lm9ubG9hZCA9IChfZTogRXZlbnQpID0+IHtcbiAgICBuZXcgQnV6ek9ubGluZSgpLmxvYWQoKTtcbn1cblxuY2xhc3MgQnV6ek9ubGluZSBpbXBsZW1lbnRzIGlCdXp6T25saW5lLCBPYnNlcnZlciB7XG5cbiAgICBwcml2YXRlIGFkYXB0ZXI6IEFpckNvbnNvbGVBZGFwdGVyO1xuXG4gICAgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy9TdGFydCB0aGUgcHJlbG9hZGVyLCB0aGVuIHRoZSBpbml0IHNjcmlwdFxuICAgICAgICBuZXcgUHJlbG9hZGVyKCkubG9hZChfdi5QUkxEX0lNRywgX3YuUFJMRF9BVUQpLnRoZW4oX19hc3NldHMgPT4gdGhpcy5pbml0KF9fYXNzZXRzKSlcbiAgICB9XG4gICAgXG4gICAgaW5pdChfX2Fzc2V0czogR2FtZUFzc2V0cyk6IHZvaWQge1xuICAgICAgICAvL0luaXQgc2NyaXB0IGdvZXMgaGVyZVxuXG4gICAgICAgIC8vU3Vic2NyaWJlIHRvIHRoZSBBaXJDb25zb2xlIGFkYXB0ZXJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IEFpckNvbnNvbGVBZGFwdGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmF0dGFjaCh0aGlzKTtcblxuICAgICAgICAvL1N0YXJ0IHRoZSBBaXJDb25zb2xlIGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc3RhcnRfZGV2aWNlX2Nvbm5lY3Rpb25fbGlzdGVuZXIoKTtcblxuICAgIH1cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICAvL0luaXQgdGhlIGdhbWUgc3RhdGVcbiAgICAgICAgY29uc29sZS5sb2coXCJHQU1FIFNUQVJUXCIpO1xuICAgICAgICBjb25zdCBnYW1lSGFuZGxlciA9IG5ldyBHYW1lU3RhdGVIYW5kbGVyKCkuaW5pdERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBzY3JlZW5IYW5kbGVyID0gbmV3IFNjcmVlbkhhbmRsZXIoKVxuICAgICAgICBcbiAgICAgICAgc2NyZWVuSGFuZGxlci52aWV3KFwic2NyZWVuX3N0YXJ0XCIpO1xuICAgIH1cblxuICAgIC8qIEdldCBhbiBvYnNlcnZlYWJsZSB1cGRhdGUgKi9cbiAgICB1cGRhdGUoc3RhdGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgX3YuTl9HU1RBUlQ6XG4gICAgICAgICAgICAgICAgLy9HYW1lIFN0YXJ0OyBzdGFydCB0aGUgbWFpbiBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZXRlcm1pbmUgdmFsaWQgb2JzZXJ2YWJsZSB1cGRhdGUgJyArIHN0YXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYWlyY29uc29sZS10eXBlc2NyaXB0L2FpcmNvbnNvbGUtdHlwZXNjcmlwdC5kLnRzXCIgLz5cblxuaW1wb3J0IHsgaUJ1enpPbmxpbmVBaXJjb25zb2xlQWRhcHRlciwgQWlyQ29uc29sZURhdGEsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSBcIi4vYnV6em9ubGluZV9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgQ29udHJvbGxlckZ1bmN0aW9ucyBmcm9tIFwiLi4vY29udHJvbGxlci9idXp6b25saW5lX2NvbnRyb2xsZXJfZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBfdiBmcm9tIFwiLi9idXp6b25saW5lX3ZhcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWlyQ29uc29sZUFkYXB0ZXIgaW1wbGVtZW50cyBpQnV6ek9ubGluZUFpcmNvbnNvbGVBZGFwdGVyLCBPYnNlcnZhYmxlIHtcbiAgICBcbiAgICBwcml2YXRlIF9pc01vYmlsZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jb250cm9sbGVyRnVuY3Rpb25zOiBDb250cm9sbGVyRnVuY3Rpb25zO1xuICAgIHByaXZhdGUgYWlyQ29uc29sZTogQWlyQ29uc29sZTtcblxuICAgIGNvbnN0cnVjdG9yKGlzTW9iaWxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzTW9iaWxlID0gaXNNb2JpbGU7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJGdW5jdGlvbnMgPSBuZXcgQ29udHJvbGxlckZ1bmN0aW9ucztcblxuXG4gICAgICAgIGlmKCFfdi5fX0RFQlVHX01PREUpIHtcbiAgICAgICAgICAgIC8qIEluc3RhbGwgQWlyQ29uc29sZSBBUEkgKi9cbiAgICAgICAgICAgIHRoaXMuYWlyQ29uc29sZSA9IG5ldyBBaXJDb25zb2xlKCk7XG4gICAgICAgICAgICB0aGlzLmFpckNvbnNvbGUub25SZWFkeSA9ICgpID0+IHRoaXMubm90aWZ5KF92Lk5fR1NUQVJUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ub3RpZnkoX3YuTl9HU1RBUlQpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRfZGV2aWNlX21lc3NhZ2VfbGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuYWlyQ29uc29sZS5vbk1lc3NhZ2UgPSAoZGV2aWNlX2lkOiBudW1iZXIsIGRhdGE6IEFpckNvbnNvbGVEYXRhKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5tZXNzYWdlX2lkKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQ29udHJvbGxlci1vbmx5IGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNhc2UgJ0pPSU5FRF9BU19TUEVDVEFUT1InOiBcbiAgICAgICAgICAgICAgICAvKiBOZXcgcGxheWVyIGhhcyBqb2luZWQgaW4gYW4gYWN0aXZlIGdhbWUsIHNvIHNob3VsZCBqb2luIGFzIHNwZWN0YXRvciAqL1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xsZXJGdW5jdGlvbnMuam9pbih0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdKT0lOX0dBTUUnOiBcbiAgICAgICAgICAgICAgICAvKiBOZXcgcGxheWVyIGhhcyBqb2luZWQgYW4gaWRsZSBnYW1lICovXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbGxlckZ1bmN0aW9ucy5qb2luKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdDT05UUk9MTEVSX1ZJQlJBVEUnOiBcbiAgICAgICAgICAgICAgICAvKiBWaWJyYXRlIHRoZSBjb250cm9sbGVyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOm51bWJlciB8IEFycmF5PG51bWJlcj4gVGltZSBpbiBtcyB0byB2aWJyYXRlIHRoZSBjb250cm9sbGVyIGZvciwgb3IgdmlicmF0aW9uIHBhdHRlcm5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKGRhdGEucGFyYW1zWyd0aW1lJ10pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAnVklFV19VUERBVEVfQUREQ0FSRCc6IFxuICAgICAgICAgICAgICAgIC8qIEFkZCBhIGNhcmQgdG8gdGhlIHZpZXdcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6c3RyaW5nICAgICAgICAgVGhlIGZpbGUgbmFtZSBvZiB0aGUgY2FyZCB0byBiZSBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5yYW5rOm51bWJlciAgICAgICAgVGhlIG51bWVyaWMgcmFuayBvZiB0aGUgY2FyZCAoZm91bmQgaW4gdGhlIENhcmQgb2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5wcm9wZXJ0aWVzOnN0cmluZyAgVGhlIGNhcmQncyBzdWl0IGFuZCB2YWx1ZSAocmVwcmVzZW50ZWQgYXMgXCJzdWl0X3ZhbHVlXCIgZS5nLiBcInNwYWRlc181XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmltZ19zcmM6c3RyaW5nICAgICBUaGUgaW1hZ2Ugc291cmNlIG9mIHRoZSBjYXJkICghIURlcHJlY2F0ZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCBgZmlsZW5hbWVgISEpXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdQTEFZRVJfU0hPV19DQVJEX0RSQVdFUic6XG4gICAgICAgICAgICAgICAgLyogU2hvdyB0aGUgY2FyZCBkcmF3ZXIuICovXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udHJvbGxlckZ1bmN0aW9ucy5zaG93Q2FyZERyYXdlcih0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ1BMQVlFUl9ISURFX0NBUkRfRFJBV0VSJzpcbiAgICAgICAgICAgICAgICAvKiBIaWRlIHRoZSBjYXJkIGRyYXdlci4gKi9cbiAgICAgICAgICAgICAgICB0aGlzLl9jb250cm9sbGVyRnVuY3Rpb25zLnNob3dDYXJkRHJhd2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdWSUVXX1VQREFURV9HQU1FTUFTVEVSJzpcbiAgICAgICAgICAgICAgICAvKiBGb3JjZXMgdGhlIGNsaWVudCB0byByZS1mZXRjaCB0aGUgc3RhcnQgc2NyZWVuICh1c2luZyBldmVudCAnXGJDTElFTlRfUkVRVUVTVF9WSUVXJykgaWYgdGhleSdyZSBub3QgaHRlIG1hc3RlciBjb250cm9sbGVyLiAqL1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgJ1ZJRVdfVVBEQVRFX1BMQVlFUkxJU1QnOlxuICAgICAgICAgICAgICAgIC8qIE9wZW4gdGhlIHBsYXllciBsaXN0IChpbiBQaGFzZSAyKSBhbmQgc2hvdyBhbGwgcGxheWVycyBpbiB0aGUgYWN0aXZlIGdhbWUgdG8gZGlzdHJpYnV0ZSBkcmlua3MgdG8uIFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkOkNhcmQgICAgICAgICAgICAgICBUaGUgY2FyZCB0aGUgdXNlciBoYXMgY2xpY2tlZCB0byBnYWluIHRoZSBwbGF5ZXJsaXN0IGFjdGlvbi4gVGhpcyBjYXJkIG11c3QgYmUga2VwdCBvcGVuIChvciBjbG9zZWQgaW4gRWFzeSBtb2RlKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaW5rX2FtdDpudW1iZXIgICAgICAgIFRoZSBhbW91bnQgb2YgZHJpbmtzIHRvIGRpc3RyaWJ1dGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfYnV0dG9uczpvYmplY3QgICBNYW5pZmVzdCBvZiBhbGwgcGxheWVycyB0aGF0IGNhbiBiZSBkaXN0cmlidXRlZCB0by4gRWFjaCBzaG91bGQgZ2V0IGl0cyBvd24gSFRNTCBidXR0b24gb24gdGhlIHBsYXllcmxpc3QuXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ0NMT1NFX1BMQVlFUkxJU1QnOlxuICAgICAgICAgICAgICAgIC8qIEZvcmNlIGNsb3NlIHRoZSBwbGF5ZXJsaXN0IChiZWNhdXNlIHRoZSBwbGF5ZXIgaGFzIHRha2VuIHRvbyBsb25nIHRvIGFuc3dlcikgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ0NMT1NFX05PVElDRSc6XG4gICAgICAgICAgICAgICAgLyogRm9yY2UgY2xvc2UgYSBub3RpY2UgKGJlY2F1c2UgdGhlIHBsYXllciBoYXMgdGFrZW4gdG9vIGxvbmcgdG8gaW50ZXJhY3Qgd2l0aCBpdCkgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdDTElFTlRfU09SVF9DQVJEUyc6XG4gICAgICAgICAgICAgICAgLyogQXV0b3NvcnQgdGhlIGNhcmRzIGluIHRoZSBwbGF5ZXIncyBoYW5kcyB0byBwcmVwYXJlIHRoZW0gZm9yIFBoYXNlIDIuIFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Om51bWJlciAgICAgICAgICBUaW1lIGluIG1zIGJlZm9yZSB0aGUgY2FyZHMgc2hvdWxkIGJlIGNsb3NlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSm9pbnQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY2FzZSAnVklFV19VUERBVEUnOlxuICAgICAgICAgICAgICAgIC8qIEEgbmV3IHZpZXcgaGFzIGJlZW4gcmVjZWl2ZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faWdub3JlX21hc3Rlcl9zcGVjdGF0b3I6Ym9vbGVhbiBPdmVycmlkZXMgdGhlICdsb2NhbC5zcGVjdGF0b3InIHByb3BlcnR5IG9mIGEgY2xpZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpbGVuYW1lOnN0cmluZyAgICAgICAgVGhlIGZpbGUgbmFtZSBvZiB0aGUgcGFydGlhbCB0byBiZSBmZXRjaGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRlbnQ6c3RyaW5nICAgICAgICAgUmF3IEhUTUwgZGF0YSB0byBwbGFjZSBpbiB0aGUgdmlldy4gUmVxdWlyZWQgaWYgYF9maWxlbmFtZWAgaXMgZW1wdHkgb3IgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgX2luamVjdDpzdHJpbmcgICAgICAgICAgU3BlY2lmeSB0aGUgRE9NIGVsZW1lbnQgdG8gcGxhY2UgdGhlIG5ldyBwYXJ0aWFsIGluLiBSZXF1aXJlZCBpZiBgY29udGVudGAgaXMgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcHBlbmQ6Ym9vbGVhbiAgICAgICAgIEFwcGVuZHMgdGhlIGNvbnRlbnQgdG8gdGhlIERPTSAoY2hpbGRyZW4gb2YgZWxlbWVudCkgaW5zdGVhZCBvZiBvdmVyd3JpdGluZyB0aGUgY29udGVudHMgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBfbm9fZmFkZW91dDpib29sZWFuICAgICBEb24ndCBwbGF5IHRoZSBmYWRlb3V0IGFuaW1hdGlvbiB3aGVuIHNldHRpbmcgdGhlIG5ldyB2aWV3LlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdWSUVXX1VQREFURV9SRU1PVkUnOlxuICAgICAgICAgICAgICAgIC8qIFJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHZpZXcuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lbGVtZW50OnN0cmluZyAgICAgICAgIFRoZSBlbGVtZW50IChpbmNsdWRpbmcgY2hpbGRyZW4pIHRvIHJlbW92ZS5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgJ1VQREFURV9EUklOS19BTVQnOlxuICAgICAgICAgICAgICAgIC8qIFVwZGF0ZSB0aGUgRHJpbmtzIGNvdW50ZXIuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaW5rczpudW1iZXIgICAgICAgICAgIFRoZSB1cGRhdGVkIGRyaW5rcyBjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcl9pZDpudW1iZXIgICAgICAgIChEZXNrdG9wIG9ubHkpIFRoZSBwbGF5ZXIgd2hvc2UgZHJpbmsgY291bnQgc2hvdWxkIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdOT1RJQ0UnOlxuICAgICAgICAgICAgICAgIC8qIERpc3BsYXkgYSBub3RpZmljYXRpb24gdG8gdGhlIHBsYXllciBhbmQvb3IgdGhlIHNjcmVlbi5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWNlX2lkOnN0cmluZyAgICAgICAgVGhlIElEIG9mIHRoZSBub3RpZmljYXRpb24gKENhbiBiZSByYW5kb20pXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOnN0cmluZyAgICAgICAgICBUaGUgbWVzc2FnZSBjb250ZW50LiBDYW4gaW5jbHVkZSBIVE1MIHRhZ3MgKGZvciBzdHlsaW5nKVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogR2FtZSAvIERlc2t0b3AgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY2FzZSAnVVBEQVRFX0FDVElWRV9QTEFZRVInOlxuICAgICAgICAgICAgICAgIC8qIFVwZGF0ZSB0aGUgaGlnaGxpZ2h0IGluZGljYXRpbmcgdGhlIGN1cnJlbnQgYWN0aXZlIHBsYXllci5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyX2lkOm51bWJlciAgICAgICAgVGhlIElEIG9mIHRoZSBuZXcgYWN0aXZlIHBsYXllci5cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnQ0xJRU5UX1JFUVVFU1RfVklFVyc6XG4gICAgICAgICAgICAgICAgLyogQSBjbGllbnQgcmVxdWVzdGVkIHRoZSBzdGFydCB2aWV3LlxuICAgICAgICAgICAgICAgICAgICBkZXZpY2VfaWQ6bnVtYmVyICAgICAgICAgICAgVGhlIG9yaWdpbiBkZXZpY2UncyBJRFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAnRElTVFJJQlVURV9VUERBVEUnOlxuICAgICAgICAgICAgICAgIC8qIFVwZGF0ZSBhIFBoYXNlIDIgZGlzdHJpYnV0aW9uIChPZmZlbmRpbmcgcGxheWVyIGhhcyBjaG9zZW4gYSByZWNpcGllbnQgaW4gdGhlaXIgcGxheWVybGlzdC4pXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RyaWJ1dGlvbl9pZDpzdHJpbmcgIFRoZSBJRCBvZiB0aGUgZGlzdHJpYnV0aW9uIG9mIHRoZSBvZmZlbmRpbmcgcGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpcGllbnRfaWQ6bnVtYmVyICAgICBUaGUgcGxheWVyIElEIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdESVNUUklCVVRFX0FDS05PV0xFREdFJzpcbiAgICAgICAgICAgICAgICAvKiBSZWNpcGllbnQgb2YgYSBkaXN0cmlidXRpb24gaGFzIGFja25vd2xlZGdlZCBpdCBhbmQgZHJhbmsgdGhlaXIgZGlzdHJpYnV0aW9uLlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0cmlidXRpb25faWQ6c3RyaW5nICBUaGUgSUQgb2YgdGhlIGRpc3RyaWJ1dGlvbiB0aGUgcmVjaXBpZW50IGlzIGN1cnJlbnRseSBwbGF5aW5nIG9uLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FzZSAnRlVOQ1RJT04nOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgJ0NMSUVOVF9BTlNXRVInOlxuICAgICAgICAgICAgICAgIC8qIEEgcGxheWVyIGhhcyBzZW50IGFuIGFuc3dlclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTpzdHJpbmcgICAgICAgICAgIFRoZSBwbGF5ZXIncyBhbnN3ZXIuXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlICdDTElFTlRfQ0FSRCc6XG4gICAgICAgICAgICAgICAgLyogQSBwbGF5ZXIgaGFzIHByZXNlbnRlZCBhIGNhcmRcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkOkNhcmQgICAgICAgICAgICAgIFRoZSBwbGF5ZXIncyBjYXJkLlxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3I6IFVua25vd24gZnVuY3Rpb24gbWVzc2FnZSByZWNlaXZlZCBpbiBBaXJjb25zb2xlIEFkYXB0ZXIgbGlzdGVuZXI6IFwiICsgZGF0YS5tZXNzYWdlX2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydF9kZXZpY2VfY29ubmVjdGlvbl9saXN0ZW5lcigpOiB2b2lkIHwgYm9vbGVhbiB7XG4gICAgICAgIGlmKF92Ll9fREVCVUdfTU9ERSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQWlyQ29uc29sZSBtZXNzYWdlIGxpc3RlbmVyIGluc3RhbnRpYXRpb24gc2tpcHBlZCwgRGVidWcgbW9kZSBlbmdhZ2VkLlwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9TdGFydCB0aGUgbWVzc2FnZSBsaXN0ZW5lclxuICAgICAgICB0aGlzLnN0YXJ0X2RldmljZV9tZXNzYWdlX2xpc3RlbmVyKCk7XG5cbiAgICAgICAgLy9TdGFydCB0aGUgQWlyQ29uc29sZSBjb25uZWN0aW9uIGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmFpckNvbnNvbGUub25Db25uZWN0ICAgID0gZGV2aWNlX2lkID0+IHRoaXMuZGV2aWNlX2Nvbm5lY3Rpb25faGFuZGxlcihkZXZpY2VfaWQpO1xuICAgICAgICB0aGlzLmFpckNvbnNvbGUub25EaXNjb25uZWN0ID0gZGV2aWNlX2lkID0+IHRoaXMuZGV2aWNlX2Rpc2Nvbm5lY3Rpb25faGFuZGxlcihkZXZpY2VfaWQpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGRldmljZV9jb25uZWN0aW9uX2hhbmRsZXIoZGV2aWNlX2lkOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICAvL1doYXQgaGFwcGVucyB3aGVuIGEgZGV2aWNlIGNvbm5lY3RzP1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSBjb25uZWN0ZWQ6XCIsIHRoaXMuYWlyQ29uc29sZS5nZXROaWNrbmFtZShkZXZpY2VfaWQpKTtcblxuICAgICAgICAvL05vdGlmeSB0aGUgb2JzZXJ2ZXJzXG4gICAgICAgIHRoaXMubm90aWZ5KF92Lk5fUENPTk5FQ1QpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGRldmljZV9kaXNjb25uZWN0aW9uX2hhbmRsZXIoZGV2aWNlX2lkOiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICAvL1doYXQgaGFwcGVucyB3aGVuIGEgZGV2aWNlIGRpc2Nvbm5lY3RzP1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSBkaXNjb25uZWN0ZWQ6XCIsIHRoaXMuYWlyQ29uc29sZS5nZXROaWNrbmFtZShkZXZpY2VfaWQpKTtcbiAgICAgICAgXG4gICAgICAgIC8vTm90aWZ5IHRoZSBvYnNlcnZlcnNcbiAgICAgICAgdGhpcy5ub3RpZnkoX3YuTl9QRENPTk5FQ1QpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGRldmljZV9zZW5kX3N0YXJ0KGRldmljZV9pZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIC8qIE9ic2VydmFibGUgbG9naWMgKi9cbiAgICBwcml2YXRlIG9ic2VydmVyczogT2JzZXJ2ZXJbXSA9IFtdO1xuICAgIFxuICAgIGF0dGFjaChvYnNlcnZlcjogT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuICAgIGRldGFjaChvYnNlcnZlcjogT2JzZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJJbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2Uob2JzZXJ2ZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIG5vdGlmeShzdGF0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBaXJDb25zb2xlRnVuY3Rpb25zIHtcbiAgICAvKipcbiAgICAgKiBTZW5kIGFuIGV2ZW50IHRvIGEgc2luZ2xlIGRldmljZS5cbiAgICAgKiBAcGFyYW0gZGV2aWNlX2lkIFRoZSByZWNpcGllbnQncyBBaXJDb25zb2xlIERldmljZSBJRFxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBldmVudCBuYW1lIGFuZCBhY2NvbXBhbnlpbmcgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHB1YmxpYyBzZW5kKGRldmljZV9pZDogbnVtYmVyLCBkYXRhOiBBaXJDb25zb2xlRGF0YSk6IHZvaWQge1xuICAgICAgICAvLyBAVE9ETzogQ3JlYXRlIE1lc3NlbmdlciBpbiBBaXJDb25zb2xlIEFkYXB0ZXJcbiAgICAgICAgXG4gICAgICAgIC8vX19BSVJDT05TT0xFX18ubWVzc2FnZShkZXZpY2VfaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJyb2FkY2FzdCBhbiBldmVudCB0byBhbGwgZGV2aWNlcyAoZXhjZXB0IHRoaXMgb25lKVxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBldmVudCBuYW1lIGFuZCBhY2NvbXBhbnlpbmcgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHB1YmxpYyBicm9hZGNhc3QoZGF0YTogQWlyQ29uc29sZURhdGEpOiB2b2lkIHtcbiAgICAgICAgLy8gQFRPRE86IENyZWF0ZSBNZXNzZW5nZXIgaW4gQWlyQ29uc29sZSBBZGFwdGVyXG4gICAgICAgIFxuICAgICAgICAvL19fQUlSQ09OU09MRV9fLm1lc3NhZ2UodW5kZWZpbmVkLCBkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IEh0dHAgZnJvbSBcIi4vYnV6em9ubGluZV9odHRwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgICBwcml2YXRlIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbiAgICBwcml2YXRlIF9hdWRpb0dhaW46IEdhaW5Ob2RlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBUT0RPOiBUaGUgQXVkaW9Db250ZXh0IGNhbm5vdCBzdGFydCBiZWZvcmUgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBwYWdlLlxuICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2FpbiA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIGZpbGUgZnJvbSB0aGUgbG9jYWwgZ2FtZSBkYXRhIGludG8gdGhlIGF1ZGlvIGJ1ZmZlci5cbiAgICAgKiBcbiAgICAgKiBGZXRjaGVzIHRoZSBmaWxlIGZyb20gdGhlIGdhbWUgc3RvcmFnZSwgZGVjb2RlcyBpdCBpbiB0aGUgQXVkaW8gY29udGV4dCBhbmQgcmV0dXJucyB0aGUgZGVjb2RlZCBhdWRpbyBidWZmZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGF1ZGlvIGZpbGUgdG8gbG9hZC4gRmlsZSBleHRlbnNpb24gbXVzdCBiZSBpbmNsdWRlZC4gRmlsZXMgZ2V0IGxvYWRlZCBmcm9tIGAuL2Rpc3QvYXVkaW9gXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXVkaW9CdWZmZXI+fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBwcmVsb2FkKGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXVkaW9CdWZmZXI+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgSHR0cCgpLmZldGNoKHtcbiAgICAgICAgICAgIG1ldGhvZDogICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgICAgdXJpOiAgICAgICAgICAgIGAuL2Rpc3QvYXVkaW8vJHtmaWxlfWAsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICAgXCJhcnJheWJ1ZmZlclwiXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGEgZmlsZSBpbiB0aGUgYnVmZmVyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZmlsZSAgICBUaGUgbmFtZSBvZiB0aGUgZmlsZSB0byBwbGF5LiBGaWxlIGV4dGVuc2lvbiBtdXN0IGJlIGluY2x1ZGVkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwZWF0ICBMb29wIHRoZSBhdWRpbyB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZC4gRGVmYXVsdCBgZmFsc2VgLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgZ2FpbiAgICBHYWluIGNvbnRyb2wgZm9yIHRoZSBnbG9hYmFsIGF1ZGlvIGNvbnRleHQuIERlZmF1bHQgMC4yXG4gICAgICovXG4gICAgcHVibGljIHBsYXkoYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyLCByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZSwgZ2FpbjogbnVtYmVyID0gMC4yKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5fYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gYXVkaW9CdWZmZXI7XG5cbiAgICAgICAgc291cmNlLmNvbm5lY3QodGhpcy5fYXVkaW9HYWluKTtcbiAgICAgICAgdGhpcy5fYXVkaW9HYWluLmNvbm5lY3QodGhpcy5fYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5fYXVkaW9HYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoZ2FpbiwgdGhpcy5fYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc291cmNlLmxvb3AgPSByZXBlYXQ7XG5cbiAgICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBmb3JJbmRleCB9IGZyb20gXCIuL2J1enpvbmxpbmVfaGVscGVyc1wiO1xuaW1wb3J0ICogYXMgX3YgZnJvbSBcIi4vYnV6em9ubGluZV92YXJzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vYnV6em9ubGluZV9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzIHtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIG5ldyBzaHVmZmxlZCBkZWNrIG9mIGNhcmRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtqb2tlcnM9ZmFsc2VdIEFkZCBKb2tlcnMgdG8gdGhlIGRlY2suIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcmV0dXJucyB7Q2FyZFtdfSBjYXJkU3RhY2s6IGBDYXJkW11gXG4gICAgICogQG1lbWJlcm9mIENhcmRzXG4gICAgICovXG4gICAgcHVibGljIGdlbmVyYXRlKGpva2VyczogYm9vbGVhbiA9IGZhbHNlKTogQ2FyZFtdIHtcbiAgICAgICAgdmFyIGNhcmRTdGFjazogQ2FyZFtdID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgLyogRGVjbGFyZSBTdWl0cyAqL1xuICAgICAgICB2YXIgc3VpdHM6IHN0cmluZ1tdID0gW192LlNVSVRfQywgX3YuU1VJVF9ELCBfdi5TVUlUX0gsIF92LlNVSVRfU107XG5cbiAgICAgICAgLyogQWRkIEpva2VycyB0byBzdWl0cyAqL1xuICAgICAgICBpZihqb2tlcnMpXG4gICAgICAgICAgICBzdWl0cy5wdXNoKF92LlNVSVRfQiwgX3YuU1VJVF9SKTtcblxuICAgICAgICAvKiBEZWNsYXJlIFZhbHVlcyAqL1xuICAgICAgICB2YXIgdmFsdWVzOiBudW1iZXJbXSA9IFsyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTRdO1xuXG4gICAgICAgIC8qIGl0ZW06IHN1aXQgKi9cbiAgICAgICAgZm9yKGNvbnN0IHtpdGVtLCBpbmRleH0gb2YgZm9ySW5kZXgoc3VpdHMpKSB7XG4gICAgICAgICAgICBmb3IobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8qIFNldCB0aGUgSk9LRVIgdmFsdWUgaWYgdGhlIHN1aXQgaXMgb2YgdHlwZSBqb2tlciAqL1xuICAgICAgICAgICAgICAgIGlmKFtfdi5TVUlUX0IsIF92LlNVSVRfUl0uaW5kZXhPZihpdGVtKSAhPT0gLTEpIHZhbHVlID0gX3YuVkFMVV9KO1xuXG4gICAgICAgICAgICAgICAgLyogUHVzaCB0aGUgY2FyZCBvbnRvIHRoZSBkZWNrICovXG4gICAgICAgICAgICAgICAgY2FyZFN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogW192LlNVSVRfRCwgX3YuU1VJVF9ILCBfdi5TVUlUX1JdLmluZGV4T2YoaXRlbSkgPT0gLTEgPyBfdi5DT0xPX0IgOiBfdi5DT0xPX1IsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGAke192LkhUTUxfQk9DQVJEfSR7aXRlbVswXS50b1VwcGVyQ2FzZSgpfSR7dmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgcmFuazogdGhpcy5fY2FsY3VsYXRlX3JhbmsoeyBzdWl0X2k6IGluZGV4LCB2YWx1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3VpdDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiBFbmQgdGhlIGxvb3AgYWZ0ZXIgMSBjYXJkIGlmIEpva2VycyBhcmUgYmVpbmcgZ2VuZXJhdGVkICovXG4gICAgICAgICAgICAgICAgaWYoW192LlNVSVRfQiwgX3YuU1VJVF9SXS5pbmRleE9mKGl0ZW0pICE9PSAtMSkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NodWZmbGUoY2FyZFN0YWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWFsIGEgY2FyZCBmcm9tIHRoZSBwcm92aWRlZCBkZWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtDYXJkW119IGNhcmRTdGFjayBUaGUgZGVjayB0byBkZWFsIGEgY2FyZCBmcm9tXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVsZXRlQ2FyZEZyb21TdGFjaz1mYWxzZV0gRGVsZXRlIHRoZSBjYXJkIGZyb20gdGhlIGRlY2sgYWZ0ZXIgZGVhbGluZyBpdC4gRGVmYXVsdCBgZmFsc2VgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dldEZyb21FbmQ9ZmFsc2VdIEdldCB0aGUgY2FyZCBmcm9tIHRoZSBib3R0b20gKGVuZCkgb2YgdGhlIGRlY2suIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcmV0dXJucyB7Q2FyZH0gY2FyZFxuICAgICAqIEBtZW1iZXJvZiBDYXJkc1xuICAgICAqL1xuICAgIHB1YmxpYyBkZWFsKGNhcmRTdGFjazogQ2FyZFtdLCBkZWxldGVDYXJkRnJvbVN0YWNrOiBib29sZWFuID0gZmFsc2UsIGdldEZyb21FbmQ6IGJvb2xlYW4gPSBmYWxzZSk6IENhcmQge1xuICAgICAgICBpZihkZWxldGVDYXJkRnJvbVN0YWNrKVxuICAgICAgICAgICAgcmV0dXJuIGdldEZyb21FbmQgPyBjYXJkU3RhY2sucG9wKCkgOiBjYXJkU3RhY2suc2hpZnQoKTsgICAvL1JlbW92ZXMgdGhlIGNhcmQgZnJvbSB0aGUgc3RhY2sgYXJyYXksIHRoZW4gcmV0dXJucyBpdFxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZ2V0RnJvbUVuZCA/IGNhcmRTdGFjay5zbGljZSgtMSlbMF0gOiBjYXJkU3RhY2tbMF07IC8vUmV0dXJucyB0aGUgY2FyZCBmcm9tIHRoZSBzdGFjayBhcnJheVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZV9yYW5rKHsgc3VpdF9pLCB2YWx1ZSB9OiB7IHN1aXRfaTogbnVtYmVyOyB2YWx1ZTogbnVtYmVyOyB9KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICg0ICogKHZhbHVlIC0gMikpICsgc3VpdF9pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NodWZmbGUoc3RhY2s6IEFycmF5PENhcmQ+KTogQXJyYXk8Q2FyZD4ge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW3N0YWNrW2ldLCBzdGFja1tqXV0gPSBbc3RhY2tbal0sIHN0YWNrW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgfVxufSIsImltcG9ydCB7R2FtZVN0YXRlLCBDYXJkLCBEaXN0cmlidXRpb24sIFBsYXllciwgU2hvd2Rvd24sIGlHYW1lU3RhdGVIYW5kbGVyfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiLi9idXp6b25saW5lX2NhcmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZUhhbmRsZXIgaW1wbGVtZW50cyBpR2FtZVN0YXRlSGFuZGxlciB7XG4gICAgcHJpdmF0ZSBfY2FyZFN0YWNrOiAgICAgIENhcmRbXTtcbiAgICBwcml2YXRlIF9jdXJyZW50QW5zd2VyOiAgc3RyaW5nO1xuICAgIHByaXZhdGUgX2N1cnJlbnRDYXJkOiAgICBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBsYXllcjogIG51bWJlcjtcbiAgICBwcml2YXRlIF9jdXJyZW50Um93OiAgICAgbnVtYmVyO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvbnM6ICBEaXN0cmlidXRpb25bXTtcbiAgICBwcml2YXRlIF9tYXN0ZXJEZXZpY2VJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX21hc3Rlck5pY2tuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGhhc2U6ICAgICAgICAgIG51bWJlcjtcbiAgICBwcml2YXRlIF9wbGF5ZXJzOiAgICAgICAgUGxheWVyW107XG4gICAgcHJpdmF0ZSBfc2hvd2Rvd246ICAgICAgIFNob3dkb3duO1xuICAgIHByaXZhdGUgX3N1YlBoYXNlOiAgICAgICBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcm91bmRzOiAgICAgICAgIG51bWJlcjtcbiAgICBwcml2YXRlIF9pblByb2dyZXNzOiAgICAgYm9vbGVhbjtcblxuICAgIHB1YmxpYyBpbml0RGVmYXVsdCgpOiBHYW1lU3RhdGVIYW5kbGVyIHtcbiAgICAgICAgXG4gICAgICAgIC8vIEZpbGwgaGFuZGxlciB3aXRoIGluaXQgZGF0YVxuICAgICAgICB0aGlzLl9jYXJkU3RhY2sgPSAgICAgICBuZXcgQ2FyZHMoKS5nZW5lcmF0ZSgpO1xuICAgICAgICB0aGlzLl9jdXJyZW50QW5zd2VyID0gICBcIlwiO1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2FyZCA9ICAgICAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gICAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50Um93ID0gICAgICAwO1xuICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25zID0gICBbXTtcbiAgICAgICAgdGhpcy5fbWFzdGVyRGV2aWNlSWQgPSAgMDtcbiAgICAgICAgdGhpcy5fbWFzdGVyTmlja25hbWUgPSAgXCJcIjtcbiAgICAgICAgdGhpcy5fcGhhc2UgPSAgICAgICAgICAgMDtcbiAgICAgICAgdGhpcy5fcGxheWVycyA9ICAgICAgICAgW107XG4gICAgICAgIHRoaXMuX3Nob3dkb3duID0gICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMuX3N1YlBoYXNlID0gICAgICAgIDA7XG4gICAgICAgIHRoaXMuX3JvdW5kcyA9ICAgICAgICAgIDA7XG4gICAgICAgIHRoaXMuX2luUHJvZ3Jlc3MgPSAgICAgIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZ2FtZVN0YXRlOiBHYW1lU3RhdGUpIHtcbiAgICAgICAgLy9NYW51YWxseSBzZXQgdGhlIGdhbWUgc3RhdGUgaW5pdFxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBnYW1lU3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChnYW1lU3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNbJ18nICsga2V5XSA9IGdhbWVTdGF0ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldChwYXJhbWV0ZXI6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgICAgLy9SZXR1cm4gdGhlIHJlcXVlc3RlZCBwYXJhbWV0ZXJcbiAgICAgICAgcmV0dXJuIHRoaXNbJ18nICsgcGFyYW1ldGVyXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KHBhcmFtZXRlciwgZGF0YSk6IHZvaWQge1xuXG4gICAgICAgIC8vQ2hlY2sgZm9yIHZhbGlkIHR5cGVcbiAgICAgICAgaWYodHlwZW9mIGRhdGEgIT09IHR5cGVvZiB0aGlzWydfJyArIHBhcmFtZXRlcl0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgZm9yIHBhcmFtZXRlciBcIiArIHBhcmFtZXRlciArICc7IGV4cGVjdGVkJyArIHR5cGVvZiB0aGlzWydfJyArIHBhcmFtZXRlcl0gKyAnLCBnb3QgJyArIHR5cGVvZiBkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IHRoZSBwYXJhbWV0ZXIgYW5kIHJldHVyblxuICAgICAgICB0aGlzWydfJyArIHBhcmFtZXRlcl0gPSBkYXRhO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiogZm9ySW5kZXg8VD4oaXRlbXM6IFRbXSB8IEl0ZXJhYmxlSXRlcmF0b3I8VD4pIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgZm9yKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgeWllbGQge2l0ZW0sIGluZGV4fTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG59IiwiaW1wb3J0IHsgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cCB7XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZmlsZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0h0dHBPcHRpb25zfSBvcHRpb25zIEhUVFAgb3B0aW9uczogYHJlc3BvbnNlVHlwZWAge1hNTEh0dHBSZXF1ZXN0UmVzcG9uc2VUeXBlfSwgYG1ldGhvZGAge3N0cmluZ30sIGB1cmlgOiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBmZXRjaChvcHRpb25zOiBIdHRwT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJpLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgIT09IHhoci5ET05FKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMClcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zLnJlc3BvbnNlVHlwZSA9PSBcInRleHRcIiA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBBdWRpbyBmcm9tIFwiLi9idXp6b25saW5lX2F1ZGlvXCI7XG5pbXBvcnQgeyBHYW1lQXNzZXRzIH0gZnJvbSBcIi4vYnV6em9ubGluZV9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciB7XG4gICAgcHJpdmF0ZSBfdG9Mb2FkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdG9Mb2FkID0gdGhpcy5fbG9hZGVkID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVsb2FkIGltYWdlIGFuZCBzb3VuZCBhc3NldHMgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBpbWFnZXMgQXJyYXkgb2YgaW1hZ2UgZmlsZXMuIFNwZWNpZnkgbG9jYXRpb24gYW5kIGZpbGUgZXh0ZW5zaW9uLiBSb290IGlzIGAuL2Rpc3QvaW1nL2AuXG4gICAgICogQHBhcmFtIHNvdW5kcyBBcnJheSBvZiBzb3VuZCBmaWxlcy4gU3BlY2lmeSBsb2NhdGlvbiwgbm8gZmlsZSBleHRlbnNpb24uIFJvb3QgaXMgYC4vZGlzdC9hdWRpb2AuXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8R2FtZUFzc2V0cz59IHthdWRpb0J1ZmZlciwgaW1hZ2VCdWZmZXJ9XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWQoaW1hZ2VzOiBBcnJheTxzdHJpbmc+LCBzb3VuZHM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEdhbWVBc3NldHM+IHtcbiAgICAgICAgdGhpcy5fdG9Mb2FkID0gaW1hZ2VzLmxlbmd0aCArIHNvdW5kcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdWRpb0J1ZmZlciA9IGF3YWl0IHRoaXMuX2xvYWRTb3VuZHMoc291bmRzKS5jYXRjaCgoZSkgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBhd2FpdCB0aGlzLl9sb2FkSW1hZ2VzKGltYWdlcykuY2F0Y2goKGUpID0+IHt0aHJvdyBlfSk7XG4gICAgICAgIHJldHVybiB7IGltYWdlQnVmZmVyLCBhdWRpb0J1ZmZlciB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZFNvdW5kcyhzb3VuZHM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEF1ZGlvQnVmZmVyW10+IHtcbiAgICAgICAgbGV0IGF1ZGlvQnVmZmVyQXJyYXk6IEFycmF5PEF1ZGlvQnVmZmVyPiA9IEFycmF5KCk7XG4gICAgICAgIGZvcihjb25zdCBzIG9mIHNvdW5kcykge1xuICAgICAgICAgICAgLy9TdHJpcCBvZmYgdGhlIHBhdGggZm9yIGluZGV4aW5nIHNvdW5kc1xuICAgICAgICAgICAgY29uc3Qgc291bmROYW1lID0gcy5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgICAgICBhdWRpb0J1ZmZlckFycmF5W3NvdW5kTmFtZV0gPSBhd2FpdCBuZXcgQXVkaW8oKS5wcmVsb2FkKHMpLmNhdGNoKGUgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvQnVmZmVyQXJyYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZEltYWdlcyhpbWFnZXM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnRbXT4ge1xuICAgICAgICBsZXQgSFRNTEltYWdlRWxlbWVudEFycmF5OiBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PiA9IEFycmF5KCk7XG4gICAgICAgIGZvcihjb25zdCBpIG9mIGltYWdlcykge1xuICAgICAgICAgICAgLy9TdHJpcCBvZmYgdGhlIHBhdGggZm9yIGluZGV4aW5nIGltYWdlc1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaS5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgICAgICBIVE1MSW1hZ2VFbGVtZW50QXJyYXlbaW1hZ2VOYW1lXSA9IGF3YWl0IHRoaXMuX2xvYWRJbWFnZShpKS5jYXRjaChlID0+IHt0aHJvdyBlfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBIVE1MSW1hZ2VFbGVtZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZEltYWdlKGZpbGU6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltYWdlICAgICA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjICAgICA9IGAuL2Rpc3QvaW1nLyR7ZmlsZX1gO1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkICA9IGUgPT4gcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIF91cGRhdGVQcm9ncmVzc0JhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkKys7XG4gICAgICAgIGNvbnN0IGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci1wcm9ncmVzcy0tYmFyJyk7XG4gICAgICAgIGUuc3R5bGUud2lkdGggPSAoMTAwICogKHRoaXMuX2xvYWRlZCAvIHRoaXMuX3RvTG9hZCkpICsgJyUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyLXRleHQnKS5pbm5lckhUTUwgPSBgTG9hZGluZy4uLiAke3RoaXMuX2xvYWRlZH0vJHt0aGlzLl90b0xvYWR9YDtcbiAgICB9XG59IiwiaW1wb3J0IEh0dHAgZnJvbSBcIi4vYnV6em9ubGluZV9odHRwXCI7XG5pbXBvcnQgeyBTY3JlZW5IYW5kbGVyT3B0aW9ucyB9IGZyb20gXCIuL2J1enpvbmxpbmVfaW50ZXJmYWNlc1wiO1xuaW1wb3J0ICogYXMgX3YgZnJvbSBcIi4vYnV6em9ubGluZV92YXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbkhhbmRsZXIge1xuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgcmVxdWVzdGVkIHZpZXcuIFRvIHVzZSBhbGwgcGFyYW1ldGVycywgdXNlIHRoZSBgc2hvd2AgZnVuY3Rpb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIHNjcmVlbiBmaWxlXG4gICAgICovXG4gICAgcHVibGljIHZpZXcoZmlsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd2luZyBcIiArIGZpbGUgKyBcIi4uLlwiKTtcbiAgICAgICAgdGhpcy5zaG93KHtcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBfY29udGVudDogICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICBfYXBwZW5kOiAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgX25vX2ZhZGVvdXQ6ICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIF9lbmxhcmdlX3ZpZXc6ICBmYWxzZSxcbiAgICAgICAgICAgICAgICBfcmVzdG9yZV92aWV3OiAgZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgcmVxdWVzdGVkIHZpZXcgZmlsZSB3aXRoIG9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NjcmVlbkhhbmRsZXJPcHRpb25zfSBvcHRpb25zIFNjcmVlbiBoYW5kbGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBhc3luYyBzaG93KG9wdGlvbnM6IFNjcmVlbkhhbmRsZXJPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmKHR5cGVvZihvcHRpb25zLmZpbGUpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IG5ldyBIdHRwKCkuZmV0Y2goe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogX3YuTUVUSF9HRVQsXG4gICAgICAgICAgICAgICAgdXJpOiBgLi9kaXN0L3RlbXBsYXRlcy9fJHtvcHRpb25zLmZpbGV9Lmh0bWw/XyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YCxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IF92LlJFVFlfVEVYVFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuYnVpbGRUZW1wbGF0ZSh0ZW1wbGF0ZSwgb3B0aW9ucy5wYXJhbXMpXG4gICAgICAgICAgICBsZXQgcXVlcnlTZWxlY3RvciA9IG9wdGlvbnMucGFyYW1zLl9pbmplY3QgPz8gJyNib192aWV3cG9ydCc7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtcy5fZW5sYXJnZV92aWV3KVxuICAgICAgICAgICAgICAgIHRoaXMuX2VubGFyZ2VWaWV3KCk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtcy5fcmVzdG9yZV92aWV3KVxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3RvcmVWaWV3KCk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtcy5fYXBwZW5kKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlcylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogRmFkZSBhbmltYXRpb24gaWYgdmlldyBnZXRzIHJlcGxhY2VkICovXG4gICAgICAgICAgICAgICAgaWYocXVlcnlTZWxlY3RvciA9PSAnI2JvX3ZpZXdwb3J0JyAmJiAhb3B0aW9ucy5wYXJhbXMuX25vX2ZhZGVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKS5jbGFzc0xpc3QuYWRkKCdmYWRlb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKS5pbm5lckhUTUwgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3RvcikuaW5uZXJIVE1MID0gcmVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gZmlsZSwgYXNzdW1lIF9pbmplY3QgYW5kIF9jb250ZW50IGluIG9wdGlvbnMucGFyYW1zOlxuICAgICAgICAgICAgaWYodHlwZW9mKG9wdGlvbnMucGFyYW1zLl9pbmplY3QpID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZihvcHRpb25zLnBhcmFtcy5fY29udGVudCkgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBkYXRhIGZvciBjb250ZW50IHJlcGxhY2VtZW50IScpXG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcmFtcy5fYXBwZW5kKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5wYXJhbXMuX2luamVjdCkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBvcHRpb25zLnBhcmFtcy5fY29udGVudClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5wYXJhbXMuX2luamVjdCkuaW5uZXJIVE1MID0gb3B0aW9ucy5wYXJhbXMuX2NvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2VubGFyZ2VWaWV3KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm8tY2xpZW50LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ3NtYWxsZXInKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvLWNsaWVudC1jYXJkcycpLmNsYXNzTGlzdC5hZGQoJ2xhcmdlcicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3RvcmVWaWV3KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm8tY2xpZW50LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3NtYWxsZXInKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvLWNsaWVudC1jYXJkcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2xhcmdlcicpO1xuICAgIH1cblxuICAgIGJ1aWxkVGVtcGxhdGUoZmlsZTogc3RyaW5nLCBwYXJhbXM6IHsgW3g6IHN0cmluZ106IGFueTsgfSkge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcylcbiAgICAgICAgICAgICAgICBmaWxlID0gZmlsZS5yZXBsYWNlKG5ldyBSZWdFeHAoYHske2tleX19YCwgJ2cnKSwgcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbn0iLCIvKiBWYXJpYWJsZXMgdXNlZCBpbiBCdXp6T25saW5lICovXG5cbi8qKioqXG4gICAgKlxuICAgICpcbiAgICAqIENvbnN0YW50cyAtIFRleHRzLCBjb25zdGFudCBudW1iZXJzIGFuZCBjb25maWd1cmFibGUgZ2FtZSBvcHRpb25zXG4gICAgKlxuICAgICpcbioqKiovXG5cbi8qIEdhbWUgLyBFbmdpbmUgc2V0dGluZ3MgKi9cbmV4cG9ydCBjb25zdCBfX0RFQlVHX01PREU6ICBib29sZWFuID0gdHJ1ZTtcblxuZXhwb3J0IGNvbnN0IFBIU19UTU9VVDogICAgIG51bWJlciA9IDIwMDA7XG5cbi8qIEFpckNvbnNvbGUgQWRhcHRlciBub3RpZmljYXRpb24gc3RhdGVzICovXG5leHBvcnQgY29uc3QgTl9HU1RBUlQ6ICAgICAgbnVtYmVyID0gMTAwO1xuXG5cbmV4cG9ydCBjb25zdCBOX1BDT05ORUNUOiAgICBudW1iZXIgPSAyMDE7XG5leHBvcnQgY29uc3QgTl9QRENPTk5FQ1Q6ICAgbnVtYmVyID0gMjAyO1xuZXhwb3J0IGNvbnN0IE5fUE5PVElGOiAgICAgIG51bWJlciA9IDIwMztcblxuXG4vKiBTdGFuZGFyZCBUZXh0cyAqL1xuZXhwb3J0IGNvbnN0IFNVSVRfSDogICAgICAgIHN0cmluZyA9IFwiaGVhcnRzXCI7XG5leHBvcnQgY29uc3QgU1VJVF9TOiAgICAgICAgc3RyaW5nID0gXCJzcGFkZXNcIjtcbmV4cG9ydCBjb25zdCBTVUlUX0M6ICAgICAgICBzdHJpbmcgPSBcImNsdWJzXCI7XG5leHBvcnQgY29uc3QgU1VJVF9EOiAgICAgICAgc3RyaW5nID0gXCJkaWFtb25kc1wiO1xuZXhwb3J0IGNvbnN0IFNVSVRfQjogICAgICAgIHN0cmluZyA9IFwiYmxhY2tqb2tlclwiO1xuZXhwb3J0IGNvbnN0IFNVSVRfUjogICAgICAgIHN0cmluZyA9IFwicmVkam9rZXJcIjtcblxuZXhwb3J0IGNvbnN0IENPTE9fUjogICAgICAgIHN0cmluZyA9IFwicmVkXCI7XG5leHBvcnQgY29uc3QgQ09MT19COiAgICAgICAgc3RyaW5nID0gXCJibGFja1wiO1xuXG5leHBvcnQgY29uc3QgVkFMVV9KOiAgICAgICAgbnVtYmVyID0gMTQ7XG5cbmV4cG9ydCBjb25zdCBIVE1MX0JPQ0FSRDogICBzdHJpbmcgPSBcImJ1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1wiO1xuXG5leHBvcnQgY29uc3QgTUVUSF9HRVQ6ICAgICAgc3RyaW5nID0gJ0dFVCc7XG5cbmV4cG9ydCBjb25zdCBSRVRZX0FCRlI6ICAgICBYTUxIdHRwUmVxdWVzdFJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbmV4cG9ydCBjb25zdCBSRVRZX1RFWFQ6ICAgICBYTUxIdHRwUmVxdWVzdFJlc3BvbnNlVHlwZSA9IFwidGV4dFwiO1xuXG4vKiBQbGF5ZXIgUHJvbXB0cyAqL1xuXG4vKiBDb25zb2xlIFByb21wdHMgLyBEZWJ1Z2dpbmcgKi9cbmV4cG9ydCBjb25zdCBDT05TX0VSUl9BVURJT19OT1RfSU5TVEFOVElBVEFCTEU6IHN0cmluZyA9IFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGF1ZGlvIGVuZ2luZS4gQXVkaW8gaXMgbm90IHN1cHBvcnRlZC5cIjtcblxuLyogUHJlbG9hZGVyOiBJbWFnZXMgKi9cbmV4cG9ydCBjb25zdCBQUkxEX0lNRzogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcImJ1enpvbmxpbmUtTG9nbzR4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfYmFjay5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0QzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9ENS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q2LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDcucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EOC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q5LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEwLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDExLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDE0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDUucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9INi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g3LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDgucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IOS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTQucG5nXCJcbl07XG5cbi8qIFByZWxvYWRlcjogQXVkaW8gKi9cbmV4cG9ydCBjb25zdCBQUkxEX0FVRDogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcInBsYXllcmNvcnJlY3Qud2F2XCIsXG4gICAgXCJhc3NpZ25wbGF5ZXIud2F2XCIsXG4gICAgXCJjb21wbGV0ZWRpc3RyaWJ1dGlvbi53YXZcIixcbiAgICBcInBsYXllcm1pc3NlZC53YXZcIixcbiAgICBcInBsYXllcndyb25nLndhdlwiLFxuICAgIFwic3RhcnRkaXN0cmlidXRpb24ud2F2XCIsXG4gICAgXCJiZ211c2ljLndhdlwiXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=