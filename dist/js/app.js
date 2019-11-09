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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/buzzonline_master.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/buzzonline_audio.ts":
/*!********************************!*\
  !*** ./ts/buzzonline_audio.ts ***!
  \********************************/
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
var buzzonline_http_1 = __webpack_require__(/*! ./buzzonline_http */ "./ts/buzzonline_http.ts");
var Audio = /** @class */ (function () {
    function Audio() {
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
                        })
                            .catch(function (e) { throw e; })];
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

/***/ "./ts/buzzonline_cards.ts":
/*!********************************!*\
  !*** ./ts/buzzonline_cards.ts ***!
  \********************************/
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
var buzzonline_helpers_1 = __webpack_require__(/*! ./buzzonline_helpers */ "./ts/buzzonline_helpers.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/buzzonline_vars.ts");
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

/***/ "./ts/buzzonline_gamestatehandler.ts":
/*!*******************************************!*\
  !*** ./ts/buzzonline_gamestatehandler.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameState = /** @class */ (function () {
    function GameState() {
    }
    return GameState;
}());
exports.default = GameState;


/***/ }),

/***/ "./ts/buzzonline_helpers.ts":
/*!**********************************!*\
  !*** ./ts/buzzonline_helpers.ts ***!
  \**********************************/
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

/***/ "./ts/buzzonline_http.ts":
/*!*******************************!*\
  !*** ./ts/buzzonline_http.ts ***!
  \*******************************/
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
     * @param {iHttpOptions} options HTTP options: `responseType` {XMLHttpRequestResponseType}, `method` {string}, `uri`: {string}
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

/***/ "./ts/buzzonline_master.ts":
/*!*********************************!*\
  !*** ./ts/buzzonline_master.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../node_modules/airconsole-typescript/airconsole-typescript.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
var buzzonline_cards_1 = __webpack_require__(/*! ./buzzonline_cards */ "./ts/buzzonline_cards.ts");
var buzzonline_preloader_1 = __webpack_require__(/*! ./buzzonline_preloader */ "./ts/buzzonline_preloader.ts");
var buzzonline_audio_1 = __webpack_require__(/*! ./buzzonline_audio */ "./ts/buzzonline_audio.ts");
var _v = __webpack_require__(/*! ./buzzonline_vars */ "./ts/buzzonline_vars.ts");
var buzzonline_gamestatehandler_1 = __webpack_require__(/*! ./buzzonline_gamestatehandler */ "./ts/buzzonline_gamestatehandler.ts");
window.onload = function (_e) {
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
    var buzzOnline = new BuzzOnline();
};
var BuzzOnline = /** @class */ (function () {
    function BuzzOnline() {
        var _this = this;
        this._airConsole = new AirConsole({
            orientation: AirConsole.ORIENTATION_LANDSCAPE,
            setup_document: false
        });
        var gameState = new buzzonline_gamestatehandler_1.default;
        this._gameData = {
            gameState: gameState,
            assets: null
        };
        var preloader = new buzzonline_preloader_1.default();
        preloader.load(_v.PRLD_IMG, _v.PRLD_AUD)
            .then(function (gameassets) {
            var cards = new buzzonline_cards_1.default().generate();
            _this._gameData.assets = gameassets;
            _this._gameData.gameState.cardStack = cards;
            new buzzonline_audio_1.default().play(gameData.assets.audioBuffer["bgmusic.wav"], true, 1);
            console.log(gameData);
        }).catch(function (e) { throw e; });
    }
    return BuzzOnline;
}());


/***/ }),

/***/ "./ts/buzzonline_preloader.ts":
/*!************************************!*\
  !*** ./ts/buzzonline_preloader.ts ***!
  \************************************/
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
var buzzonline_audio_1 = __webpack_require__(/*! ./buzzonline_audio */ "./ts/buzzonline_audio.ts");
var Preloader = /** @class */ (function () {
    function Preloader() {
        this._toLoad = this._loaded = 0;
    }
    /**
     * Preload image and sound assets from the server.
     *
     * @param images Array of image files. Specify location and file extension Root is `./dist/img/`.
     * @param sounds Array of sound files. Specify location, no file extension Root is `./dist/audio`.
     *
     * @returns {Promise<iGameAssets>} {audioBuffer, imageBuffer}
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
        var e = document.querySelector('.loader--inner');
        e.style.width = (100 * (this._loaded / this._toLoad)) + '%';
        document.querySelector('.loader--text').innerHTML = "Loading... " + this._loaded + "/" + this._toLoad;
    };
    return Preloader;
}());
exports.default = Preloader;


/***/ }),

/***/ "./ts/buzzonline_vars.ts":
/*!*******************************!*\
  !*** ./ts/buzzonline_vars.ts ***!
  \*******************************/
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
exports.RETY_ARRAYBUFFER = "arraybuffer";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi90cy9idXp6b25saW5lX2NhcmRzLnRzIiwid2VicGFjazovLy8uL3RzL2J1enpvbmxpbmVfZ2FtZXN0YXRlaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi90cy9idXp6b25saW5lX2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV9odHRwLnRzIiwid2VicGFjazovLy8uL3RzL2J1enpvbmxpbmVfbWFzdGVyLnRzIiwid2VicGFjazovLy8uL3RzL2J1enpvbmxpbmVfcHJlbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3RzL2J1enpvbmxpbmVfdmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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c0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7Q0FDMUMsQ0FBQztBQUVGLHNCQUFzQjtBQUNULGdCQUFRLEdBQWtCO0lBQ25DLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEIsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2J1enpvbmxpbmVfbWFzdGVyLnRzXCIpO1xuIiwiaW1wb3J0IEh0dHAgZnJvbSBcIi4vYnV6em9ubGluZV9odHRwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgICBwcml2YXRlIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbiAgICBwcml2YXRlIF9hdWRpb0dhaW46IEdhaW5Ob2RlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2FpbiA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIGZpbGUgZnJvbSB0aGUgbG9jYWwgZ2FtZSBkYXRhIGludG8gdGhlIGF1ZGlvIGJ1ZmZlci5cbiAgICAgKiBcbiAgICAgKiBGZXRjaGVzIHRoZSBmaWxlIGZyb20gdGhlIGdhbWUgc3RvcmFnZSwgZGVjb2RlcyBpdCBpbiB0aGUgQXVkaW8gY29udGV4dCBhbmQgcmV0dXJucyB0aGUgZGVjb2RlZCBhdWRpbyBidWZmZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGF1ZGlvIGZpbGUgdG8gbG9hZC4gRmlsZSBleHRlbnNpb24gbXVzdCBiZSBpbmNsdWRlZC4gRmlsZXMgZ2V0IGxvYWRlZCBmcm9tIGAuL2Rpc3QvYXVkaW9gXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXVkaW9CdWZmZXI+fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBwcmVsb2FkKGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXVkaW9CdWZmZXI+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgSHR0cCgpLmZldGNoKHtcbiAgICAgICAgICAgIG1ldGhvZDogICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgICAgdXJpOiAgICAgICAgICAgIGAuL2Rpc3QvYXVkaW8vJHtmaWxlfWAsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICAgXCJhcnJheWJ1ZmZlclwiXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHt0aHJvdyBlfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBhIGZpbGUgaW4gdGhlIGJ1ZmZlci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGZpbGUgICAgVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gcGxheS4gRmlsZSBleHRlbnNpb24gbXVzdCBiZSBpbmNsdWRlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGVhdCAgTG9vcCB0aGUgYXVkaW8gd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQuIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGdhaW4gICAgR2FpbiBjb250cm9sIGZvciB0aGUgZ2xvYWJhbCBhdWRpbyBjb250ZXh0LiBEZWZhdWx0IDAuMlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KGF1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlciwgcmVwZWF0OiBib29sZWFuID0gZmFsc2UsIGdhaW46IG51bWJlciA9IDAuMik6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xuXG4gICAgICAgIHNvdXJjZS5jb25uZWN0KHRoaXMuX2F1ZGlvR2Fpbik7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2Fpbi5jb25uZWN0KHRoaXMuX2F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKGdhaW4sIHRoaXMuX2F1ZGlvQ29udGV4dC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdXJjZS5sb29wID0gcmVwZWF0O1xuXG4gICAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZm9ySW5kZXggfSBmcm9tIFwiLi9idXp6b25saW5lX2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIF92IGZyb20gXCIuL2J1enpvbmxpbmVfdmFyc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL2J1enpvbmxpbmVfaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkcyB7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBuZXcgc2h1ZmZsZWQgZGVjayBvZiBjYXJkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbam9rZXJzPWZhbHNlXSBBZGQgSm9rZXJzIHRvIHRoZSBkZWNrLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAgICogQHJldHVybnMge0NhcmRbXX0gY2FyZFN0YWNrOiBgQ2FyZFtdYFxuICAgICAqIEBtZW1iZXJvZiBDYXJkc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZW5lcmF0ZShqb2tlcnM6IGJvb2xlYW4gPSBmYWxzZSk6IENhcmRbXSB7XG4gICAgICAgIHZhciBjYXJkU3RhY2s6IENhcmRbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIC8qIERlY2xhcmUgU3VpdHMgKi9cbiAgICAgICAgdmFyIHN1aXRzOiBzdHJpbmdbXSA9IFtfdi5TVUlUX0MsIF92LlNVSVRfRCwgX3YuU1VJVF9ILCBfdi5TVUlUX1NdO1xuXG4gICAgICAgIC8qIEFkZCBKb2tlcnMgdG8gc3VpdHMgKi9cbiAgICAgICAgaWYoam9rZXJzKVxuICAgICAgICAgICAgc3VpdHMucHVzaChfdi5TVUlUX0IsIF92LlNVSVRfUik7XG5cbiAgICAgICAgLyogRGVjbGFyZSBWYWx1ZXMgKi9cbiAgICAgICAgdmFyIHZhbHVlczogbnVtYmVyW10gPSBbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XTtcblxuICAgICAgICAvKiBpdGVtOiBzdWl0ICovXG4gICAgICAgIGZvcihjb25zdCB7aXRlbSwgaW5kZXh9IG9mIGZvckluZGV4KHN1aXRzKSkge1xuICAgICAgICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvKiBTZXQgdGhlIEpPS0VSIHZhbHVlIGlmIHRoZSBzdWl0IGlzIG9mIHR5cGUgam9rZXIgKi9cbiAgICAgICAgICAgICAgICBpZihbX3YuU1VJVF9CLCBfdi5TVUlUX1JdLmluZGV4T2YoaXRlbSkgIT09IC0xKSB2YWx1ZSA9IF92LlZBTFVfSjtcblxuICAgICAgICAgICAgICAgIC8qIFB1c2ggdGhlIGNhcmQgb250byB0aGUgZGVjayAqL1xuICAgICAgICAgICAgICAgIGNhcmRTdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtfdi5TVUlUX0QsIF92LlNVSVRfSCwgX3YuU1VJVF9SXS5pbmRleE9mKGl0ZW0pID09IC0xID8gX3YuQ09MT19CIDogX3YuQ09MT19SLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBgJHtfdi5IVE1MX0JPQ0FSRH0ke2l0ZW1bMF0udG9VcHBlckNhc2UoKX0ke3ZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IHRoaXMuX2NhbGN1bGF0ZV9yYW5rKHsgc3VpdF9pOiBpbmRleCwgdmFsdWUgfSksXG4gICAgICAgICAgICAgICAgICAgIHN1aXQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyogRW5kIHRoZSBsb29wIGFmdGVyIDEgY2FyZCBpZiBKb2tlcnMgYXJlIGJlaW5nIGdlbmVyYXRlZCAqL1xuICAgICAgICAgICAgICAgIGlmKFtfdi5TVUlUX0IsIF92LlNVSVRfUl0uaW5kZXhPZihpdGVtKSAhPT0gLTEpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaHVmZmxlKGNhcmRTdGFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVhbCBhIGNhcmQgZnJvbSB0aGUgcHJvdmlkZWQgZGVjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q2FyZFtdfSBjYXJkU3RhY2sgVGhlIGRlY2sgdG8gZGVhbCBhIGNhcmQgZnJvbVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlbGV0ZUNhcmRGcm9tU3RhY2s9ZmFsc2VdIERlbGV0ZSB0aGUgY2FyZCBmcm9tIHRoZSBkZWNrIGFmdGVyIGRlYWxpbmcgaXQuIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGcm9tRW5kPWZhbHNlXSBHZXQgdGhlIGNhcmQgZnJvbSB0aGUgYm90dG9tIChlbmQpIG9mIHRoZSBkZWNrLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAgICogQHJldHVybnMge0NhcmR9IGNhcmRcbiAgICAgKiBAbWVtYmVyb2YgQ2FyZHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVhbChjYXJkU3RhY2s6IENhcmRbXSwgZGVsZXRlQ2FyZEZyb21TdGFjazogYm9vbGVhbiA9IGZhbHNlLCBnZXRGcm9tRW5kOiBib29sZWFuID0gZmFsc2UpOiBDYXJkIHtcbiAgICAgICAgaWYoZGVsZXRlQ2FyZEZyb21TdGFjaylcbiAgICAgICAgICAgIHJldHVybiBnZXRGcm9tRW5kID8gY2FyZFN0YWNrLnBvcCgpIDogY2FyZFN0YWNrLnNoaWZ0KCk7ICAgLy9SZW1vdmVzIHRoZSBjYXJkIGZyb20gdGhlIHN0YWNrIGFycmF5LCB0aGVuIHJldHVybnMgaXRcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGdldEZyb21FbmQgPyBjYXJkU3RhY2suc2xpY2UoLTEpWzBdIDogY2FyZFN0YWNrWzBdOyAvL1JldHVybnMgdGhlIGNhcmQgZnJvbSB0aGUgc3RhY2sgYXJyYXlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVfcmFuayh7IHN1aXRfaSwgdmFsdWUgfTogeyBzdWl0X2k6IG51bWJlcjsgdmFsdWU6IG51bWJlcjsgfSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNCAqICh2YWx1ZSAtIDIpKSArIHN1aXRfaTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaHVmZmxlKHN0YWNrOiBBcnJheTxDYXJkPik6IEFycmF5PENhcmQ+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFtzdGFja1tpXSwgc3RhY2tbal1dID0gW3N0YWNrW2pdLCBzdGFja1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH1cbn0iLCJpbXBvcnQge2lHYW1lU3RhdGUsIGlDYXJkLCBpRGlzdHJpYnV0aW9uLCBpUGxheWVyLCBpU2hvd2Rvd259IGZyb20gXCIuL2J1enpvbmxpbmVfaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU3RhdGUgaW1wbGVtZW50cyBpR2FtZVN0YXRlIHtcbiAgICBjYXJkU3RhY2s6ICAgICAgaUNhcmRbXTtcbiAgICBjdXJyZW50QW5zd2VyOiAgU3RyaW5nO1xuICAgIGN1cnJlbnRDYXJkOiAgICBOdW1iZXI7XG4gICAgY3VycmVudFBsYXllcjogIE51bWJlcjtcbiAgICBjdXJyZW50Um93OiAgICAgTnVtYmVyO1xuICAgIGRpc3RyaWJ1dGlvbnM6ICBpRGlzdHJpYnV0aW9uW107XG4gICAgbWFzdGVyRGV2aWNlSWQ6IE51bWJlcjtcbiAgICBtYXN0ZXJOaWNrbmFtZTogU3RyaW5nO1xuICAgIHBoYXNlOiAgICAgICAgICBOdW1iZXI7XG4gICAgcGxheWVyczogICAgICAgIGlQbGF5ZXJbXTtcbiAgICBzaG93ZG93bjogICAgICAgaVNob3dkb3duO1xuICAgIHN1YlBoYXNlOiAgICAgICBOdW1iZXI7XG4gICAgcm91bmRzOiAgICAgICAgIE51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24qIGZvckluZGV4PFQ+KGl0ZW1zOiBUW10gfCBJdGVyYWJsZUl0ZXJhdG9yPFQ+KSB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvcihjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIHlpZWxkIHtpdGVtLCBpbmRleH07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxufSIsImltcG9ydCB7IGlIdHRwT3B0aW9ucyB9IGZyb20gXCIuL2J1enpvbmxpbmVfaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgYSBmaWxlIGZyb20gdGhlIHNlcnZlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aUh0dHBPcHRpb25zfSBvcHRpb25zIEhUVFAgb3B0aW9uczogYHJlc3BvbnNlVHlwZWAge1hNTEh0dHBSZXF1ZXN0UmVzcG9uc2VUeXBlfSwgYG1ldGhvZGAge3N0cmluZ30sIGB1cmlgOiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBmZXRjaChvcHRpb25zOiBpSHR0cE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVyaSwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlICE9PSB4aHIuRE9ORSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucy5yZXNwb25zZVR5cGUgPT0gXCJ0ZXh0XCIgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL2FpcmNvbnNvbGUtdHlwZXNjcmlwdC9haXJjb25zb2xlLXR5cGVzY3JpcHQuZC50c1wiIC8+XG5cbi8qKlxuICogQnV6ek9ubGluZSAtIFRoZSBBaXJDb25zb2xlIEFkYXB0YWlvblxuICogYnkgUG93ZXIgb2YgSW50ZXJlc3QgLSAyMDE5XG4gKlxuICovXG5pbXBvcnQgQ2FyZHMgICAgICAgIGZyb20gXCIuL2J1enpvbmxpbmVfY2FyZHNcIjtcbmltcG9ydCBQcmVsb2FkZXIgICAgZnJvbSBcIi4vYnV6em9ubGluZV9wcmVsb2FkZXJcIjtcbmltcG9ydCBBdWRpbyAgICAgICAgZnJvbSBcIi4vYnV6em9ubGluZV9hdWRpb1wiO1xuaW1wb3J0ICogYXMgX3YgICAgICBmcm9tIFwiLi9idXp6b25saW5lX3ZhcnNcIjtcbmltcG9ydCBHYW1lU3RhdGUgICAgZnJvbSBcIi4vYnV6em9ubGluZV9nYW1lc3RhdGVoYW5kbGVyXCI7XG5pbXBvcnQgeyBpR2FtZURhdGEgfWZyb20gXCIuL2J1enpvbmxpbmVfaW50ZXJmYWNlc1wiO1xuXG4vKioqKlxuICogR2xvYmFsIGRlY2xhcmF0aW9uc1xuICovXG5kZWNsYXJlIGdsb2JhbCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2xvYmFsIEdhbWUgRGF0YSBvYmplY3QuXG4gICAgICogXG4gICAgICogSG9sZHMgdGhlIGdhbWUgYXNzZXRzLCBhcyB3ZWxsIGFzIHRoZSBjdXJyZW50IGdhbWUgc3RhdGUuXG4gICAgICovXG4gICAgdmFyIGdhbWVEYXRhOiBpR2FtZURhdGE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2xvYmFsIEFpckNvbnNvbGUgb2JqZWN0LlxuICAgICAqL1xuICAgIHZhciBhaXJDb25zb2xlOiBBaXJDb25zb2xlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsIHN0b3JhZ2UgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICB2YXIgbG9jYWxTdG9yYWdlOiBTdG9yYWdlO1xufVxuXG53aW5kb3cub25sb2FkID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIC8vIHZhciBjYXJkc3RhY2sgPSBjYXJkcy5nZW5lcmF0ZSgpXG4gICAgLy8gY29uc29sZS5sb2coY2FyZHN0YWNrKTtcbiAgICAvLyB2YXIgY2FyZCA9IGNhcmRzLmRlYWwoY2FyZHN0YWNrKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjYXJkLCBjYXJkc3RhY2spO1xuICAgIC8vIHZhciBjYXJkID0gY2FyZHMuZGVhbChjYXJkc3RhY2ssIHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQsIGNhcmRzdGFjayk7XG4gICAgLy8gdmFyIGNhcmQgPSBjYXJkcy5kZWFsKGNhcmRzdGFjaywgZmFsc2UsIHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQsIGNhcmRzdGFjayk7XG4gICAgLy8gdmFyIGNhcmQgPSBjYXJkcy5kZWFsKGNhcmRzdGFjaywgdHJ1ZSwgdHJ1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coY2FyZCwgY2FyZHN0YWNrKTtcblxuICAgIGNvbnN0IGJ1enpPbmxpbmUgPSBuZXcgQnV6ek9ubGluZSgpO1xuXG59XG5cblxuY2xhc3MgQnV6ek9ubGluZSB7XG4gICAgcHJpdmF0ZSBfZ2FtZURhdGE6IGlHYW1lRGF0YTtcbiAgICBwcml2YXRlIF9haXJDb25zb2xlOiBBaXJDb25zb2xlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FpckNvbnNvbGUgPSBuZXcgQWlyQ29uc29sZSh7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogQWlyQ29uc29sZS5PUklFTlRBVElPTl9MQU5EU0NBUEUsXG4gICAgICAgICAgICBzZXR1cF9kb2N1bWVudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlO1xuICAgICAgICB0aGlzLl9nYW1lRGF0YSA9IHtcbiAgICAgICAgICAgIGdhbWVTdGF0ZTogZ2FtZVN0YXRlLFxuICAgICAgICAgICAgYXNzZXRzOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVsb2FkZXIgID0gbmV3IFByZWxvYWRlcigpO1xuICAgICAgICBcbiAgICAgICAgcHJlbG9hZGVyLmxvYWQoX3YuUFJMRF9JTUcsIF92LlBSTERfQVVEKVxuICAgICAgICAudGhlbihnYW1lYXNzZXRzID0+IHtcbiAgICAgICAgICAgIHZhciBjYXJkcyA9IG5ldyBDYXJkcygpLmdlbmVyYXRlKCk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lRGF0YS5hc3NldHMgPSBnYW1lYXNzZXRzO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZURhdGEuZ2FtZVN0YXRlLmNhcmRTdGFjayA9IGNhcmRzO1xuICAgICAgICAgICAgbmV3IEF1ZGlvKCkucGxheShnYW1lRGF0YS5hc3NldHMuYXVkaW9CdWZmZXJbXCJiZ211c2ljLndhdlwiXSwgdHJ1ZSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lRGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKGUgPT4geyB0aHJvdyBlIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgQXVkaW8gZnJvbSBcIi4vYnV6em9ubGluZV9hdWRpb1wiO1xuaW1wb3J0IHsgaUdhbWVBc3NldHMgfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIHtcbiAgICBwcml2YXRlIF90b0xvYWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2FkZWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90b0xvYWQgPSB0aGlzLl9sb2FkZWQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZWxvYWQgaW1hZ2UgYW5kIHNvdW5kIGFzc2V0cyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIGltYWdlcyBBcnJheSBvZiBpbWFnZSBmaWxlcy4gU3BlY2lmeSBsb2NhdGlvbiBhbmQgZmlsZSBleHRlbnNpb24gUm9vdCBpcyBgLi9kaXN0L2ltZy9gLlxuICAgICAqIEBwYXJhbSBzb3VuZHMgQXJyYXkgb2Ygc291bmQgZmlsZXMuIFNwZWNpZnkgbG9jYXRpb24sIG5vIGZpbGUgZXh0ZW5zaW9uIFJvb3QgaXMgYC4vZGlzdC9hdWRpb2AuXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8aUdhbWVBc3NldHM+fSB7YXVkaW9CdWZmZXIsIGltYWdlQnVmZmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBsb2FkKGltYWdlczogQXJyYXk8c3RyaW5nPiwgc291bmRzOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxpR2FtZUFzc2V0cz4ge1xuICAgICAgICB0aGlzLl90b0xvYWQgPSBpbWFnZXMubGVuZ3RoICsgc291bmRzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGF1ZGlvQnVmZmVyID0gYXdhaXQgdGhpcy5fbG9hZFNvdW5kcyhzb3VuZHMpLmNhdGNoKChlKSA9PiB7dGhyb3cgZX0pO1xuICAgICAgICBjb25zdCBpbWFnZUJ1ZmZlciA9IGF3YWl0IHRoaXMuX2xvYWRJbWFnZXMoaW1hZ2VzKS5jYXRjaCgoZSkgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgcmV0dXJuIHsgaW1hZ2VCdWZmZXIsIGF1ZGlvQnVmZmVyIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkU291bmRzKHNvdW5kczogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8QXVkaW9CdWZmZXJbXT4ge1xuICAgICAgICBsZXQgYXVkaW9CdWZmZXJBcnJheTogQXJyYXk8QXVkaW9CdWZmZXI+ID0gQXJyYXkoKTtcbiAgICAgICAgZm9yKGNvbnN0IHMgb2Ygc291bmRzKSB7XG4gICAgICAgICAgICAvL1N0cmlwIG9mZiB0aGUgcGF0aCBmb3IgaW5kZXhpbmcgc291bmRzXG4gICAgICAgICAgICBjb25zdCBzb3VuZE5hbWUgPSBzLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAgICAgICAgIGF1ZGlvQnVmZmVyQXJyYXlbc291bmROYW1lXSA9IGF3YWl0IG5ldyBBdWRpbygpLnByZWxvYWQocykuY2F0Y2goZSA9PiB7dGhyb3cgZX0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXVkaW9CdWZmZXJBcnJheTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkSW1hZ2VzKGltYWdlczogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudFtdPiB7XG4gICAgICAgIGxldCBIVE1MSW1hZ2VFbGVtZW50QXJyYXk6IEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+ID0gQXJyYXkoKTtcbiAgICAgICAgZm9yKGNvbnN0IGkgb2YgaW1hZ2VzKSB7XG4gICAgICAgICAgICAvL1N0cmlwIG9mZiB0aGUgcGF0aCBmb3IgaW5kZXhpbmcgaW1hZ2VzXG4gICAgICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBpLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAgICAgICAgIEhUTUxJbWFnZUVsZW1lbnRBcnJheVtpbWFnZU5hbWVdID0gYXdhaXQgdGhpcy5fbG9hZEltYWdlKGkpLmNhdGNoKGUgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUxJbWFnZUVsZW1lbnRBcnJheTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkSW1hZ2UoZmlsZTogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgICAgID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgICAgID0gYC4vZGlzdC9pbWcvJHtmaWxlfWA7XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgID0gZSA9PiByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgX3VwZGF0ZVByb2dyZXNzQmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb2FkZWQrKztcbiAgICAgICAgY29uc3QgZSA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyLS1pbm5lcicpO1xuICAgICAgICBlLnN0eWxlLndpZHRoID0gKDEwMCAqICh0aGlzLl9sb2FkZWQgLyB0aGlzLl90b0xvYWQpKSArICclJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci0tdGV4dCcpLmlubmVySFRNTCA9IGBMb2FkaW5nLi4uICR7dGhpcy5fbG9hZGVkfS8ke3RoaXMuX3RvTG9hZH1gO1xuICAgIH1cbn0iLCIvKiBWYXJpYWJsZXMgdXNlZCBpbiBCdXp6T25saW5lICovXG5cbi8qKioqXG4gICAgKlxuICAgICpcbiAgICAqIENvbnN0YW50cyAtIFRleHRzLCBjb25zdGFudCBudW1iZXJzIGFuZCBjb25maWd1cmFibGUgZ2FtZSBvcHRpb25zXG4gICAgKlxuICAgICpcbioqKiovXG5cbi8qIFN0YW5kYXJkIFRleHRzICovXG5leHBvcnQgY29uc3QgU1VJVF9IOiAgICAgICAgc3RyaW5nID0gXCJoZWFydHNcIjtcbmV4cG9ydCBjb25zdCBTVUlUX1M6ICAgICAgICBzdHJpbmcgPSBcInNwYWRlc1wiO1xuZXhwb3J0IGNvbnN0IFNVSVRfQzogICAgICAgIHN0cmluZyA9IFwiY2x1YnNcIjtcbmV4cG9ydCBjb25zdCBTVUlUX0Q6ICAgICAgICBzdHJpbmcgPSBcImRpYW1vbmRzXCI7XG5leHBvcnQgY29uc3QgU1VJVF9COiAgICAgICAgc3RyaW5nID0gXCJibGFja2pva2VyXCI7XG5leHBvcnQgY29uc3QgU1VJVF9SOiAgICAgICAgc3RyaW5nID0gXCJyZWRqb2tlclwiO1xuXG5leHBvcnQgY29uc3QgQ09MT19SOiAgICAgICAgc3RyaW5nID0gXCJyZWRcIjtcbmV4cG9ydCBjb25zdCBDT0xPX0I6ICAgICAgICBzdHJpbmcgPSBcImJsYWNrXCI7XG5cbmV4cG9ydCBjb25zdCBWQUxVX0o6ICAgICAgICBudW1iZXIgPSAxNDtcblxuZXhwb3J0IGNvbnN0IEhUTUxfQk9DQVJEOiAgIHN0cmluZyA9IFwiYnV6em9ubGluZV9fcGxheWluZ2NhcmRfXCI7XG5cbmV4cG9ydCBjb25zdCBNRVRIX0dFVDogICAgICBzdHJpbmcgPSAnR0VUJztcblxuZXhwb3J0IGNvbnN0IFJFVFlfQVJSQVlCVUZGRVI6ICAgICBYTUxIdHRwUmVxdWVzdFJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbmV4cG9ydCBjb25zdCBSRVRZX1RFWFQ6ICAgICBYTUxIdHRwUmVxdWVzdFJlc3BvbnNlVHlwZSA9IFwidGV4dFwiO1xuXG4vKiBQbGF5ZXIgUHJvbXB0cyAqL1xuXG4vKiBDb25zb2xlIFByb21wdHMgLyBEZWJ1Z2dpbmcgKi9cbmV4cG9ydCBjb25zdCBDT05TX0VSUl9BVURJT19OT1RfSU5TVEFOVElBVEFCTEU6IHN0cmluZyA9IFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGF1ZGlvIGVuZ2luZS4gQXVkaW8gaXMgbm90IHN1cHBvcnRlZC5cIjtcblxuLyogUHJlbG9hZGVyOiBJbWFnZXMgKi9cbmV4cG9ydCBjb25zdCBQUkxEX0lNRzogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcImJ1enpvbmxpbmUtTG9nbzR4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfYmFjay5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0QzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9ENS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q2LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDcucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EOC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q5LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEwLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDExLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDE0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDUucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9INi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g3LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDgucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IOS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTQucG5nXCJcbl07XG5cbi8qIFByZWxvYWRlcjogQXVkaW8gKi9cbmV4cG9ydCBjb25zdCBQUkxEX0FVRDogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcInBsYXllcmNvcnJlY3Qud2F2XCIsXG4gICAgXCJhc3NpZ25wbGF5ZXIud2F2XCIsXG4gICAgXCJjb21wbGV0ZWRpc3RyaWJ1dGlvbi53YXZcIixcbiAgICBcInBsYXllcm1pc3NlZC53YXZcIixcbiAgICBcInBsYXllcndyb25nLndhdlwiLFxuICAgIFwic3RhcnRkaXN0cmlidXRpb24ud2F2XCIsXG4gICAgXCJiZ211c2ljLndhdlwiXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=