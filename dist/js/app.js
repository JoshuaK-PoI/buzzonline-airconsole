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
        if (repeat)
            source.loop = true;
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
     * @returns {Card[]}
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
        this._gameData = { gameState: null, assets: null };
        this._airConsole = new AirConsole({
            orientation: AirConsole.ORIENTATION_LANDSCAPE,
            setup_document: false
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi90cy9idXp6b25saW5lX2NhcmRzLnRzIiwid2VicGFjazovLy8uL3RzL2J1enpvbmxpbmVfaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9idXp6b25saW5lX2h0dHAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV9tYXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV9wcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvYnV6em9ubGluZV92YXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnR0FBcUM7QUFFckM7SUFJ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Q3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx1Q0FBdUM7Q0FDMUMsQ0FBQztBQUVGLHNCQUFzQjtBQUNULGdCQUFRLEdBQWtCO0lBQ25DLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEIsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2J1enpvbmxpbmVfbWFzdGVyLnRzXCIpO1xuIiwiaW1wb3J0IEh0dHAgZnJvbSBcIi4vYnV6em9ubGluZV9odHRwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIHtcbiAgICBwcml2YXRlIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbiAgICBwcml2YXRlIF9hdWRpb0dhaW46IEdhaW5Ob2RlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2FpbiA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIGZpbGUgZnJvbSB0aGUgbG9jYWwgZ2FtZSBkYXRhIGludG8gdGhlIGF1ZGlvIGJ1ZmZlci5cbiAgICAgKiBcbiAgICAgKiBGZXRjaGVzIHRoZSBmaWxlIGZyb20gdGhlIGdhbWUgc3RvcmFnZSwgZGVjb2RlcyBpdCBpbiB0aGUgQXVkaW8gY29udGV4dCBhbmQgcmV0dXJucyB0aGUgZGVjb2RlZCBhdWRpbyBidWZmZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGF1ZGlvIGZpbGUgdG8gbG9hZC4gRmlsZSBleHRlbnNpb24gbXVzdCBiZSBpbmNsdWRlZC4gRmlsZXMgZ2V0IGxvYWRlZCBmcm9tIGAuL2Rpc3QvYXVkaW9gXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXVkaW9CdWZmZXI+fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBwcmVsb2FkKGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXVkaW9CdWZmZXI+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgSHR0cCgpLmZldGNoKHtcbiAgICAgICAgICAgIG1ldGhvZDogICAgICAgICBcIkdFVFwiLFxuICAgICAgICAgICAgdXJpOiAgICAgICAgICAgIGAuL2Rpc3QvYXVkaW8vJHtmaWxlfWAsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICAgXCJhcnJheWJ1ZmZlclwiXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHt0aHJvdyBlfSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBhIGZpbGUgaW4gdGhlIGJ1ZmZlci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGZpbGUgICAgVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gcGxheS4gRmlsZSBleHRlbnNpb24gbXVzdCBiZSBpbmNsdWRlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGVhdCAgTG9vcCB0aGUgYXVkaW8gd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQuIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIGdhaW4gICAgR2FpbiBjb250cm9sIGZvciB0aGUgZ2xvYWJhbCBhdWRpbyBjb250ZXh0LiBEZWZhdWx0IDAuMlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KGF1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlciwgcmVwZWF0OiBib29sZWFuID0gZmFsc2UsIGdhaW46IG51bWJlciA9IDAuMik6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xuXG4gICAgICAgIHNvdXJjZS5jb25uZWN0KHRoaXMuX2F1ZGlvR2Fpbik7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2Fpbi5jb25uZWN0KHRoaXMuX2F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuX2F1ZGlvR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKGdhaW4sIHRoaXMuX2F1ZGlvQ29udGV4dC5jdXJyZW50VGltZSk7XG5cbiAgICAgICAgaWYocmVwZWF0KVxuICAgICAgICAgICAgc291cmNlLmxvb3AgPSB0cnVlO1xuXG4gICAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBmb3JJbmRleCB9IGZyb20gXCIuL2J1enpvbmxpbmVfaGVscGVyc1wiO1xuaW1wb3J0ICogYXMgX3YgZnJvbSBcIi4vYnV6em9ubGluZV92YXJzXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vYnV6em9ubGluZV9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRzIHtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIG5ldyBzaHVmZmxlZCBkZWNrIG9mIGNhcmRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtqb2tlcnM9ZmFsc2VdIEFkZCBKb2tlcnMgdG8gdGhlIGRlY2suIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcmV0dXJucyB7Q2FyZFtdfVxuICAgICAqIEBtZW1iZXJvZiBDYXJkc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZW5lcmF0ZShqb2tlcnM6IGJvb2xlYW4gPSBmYWxzZSk6IENhcmRbXSB7XG4gICAgICAgIHZhciBjYXJkU3RhY2s6IENhcmRbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIC8qIERlY2xhcmUgU3VpdHMgKi9cbiAgICAgICAgdmFyIHN1aXRzOiBzdHJpbmdbXSA9IFtfdi5TVUlUX0MsIF92LlNVSVRfRCwgX3YuU1VJVF9ILCBfdi5TVUlUX1NdO1xuXG4gICAgICAgIC8qIEFkZCBKb2tlcnMgdG8gc3VpdHMgKi9cbiAgICAgICAgaWYoam9rZXJzKVxuICAgICAgICAgICAgc3VpdHMucHVzaChfdi5TVUlUX0IsIF92LlNVSVRfUik7XG5cbiAgICAgICAgLyogRGVjbGFyZSBWYWx1ZXMgKi9cbiAgICAgICAgdmFyIHZhbHVlczogbnVtYmVyW10gPSBbMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XTtcblxuICAgICAgICAvKiBpdGVtOiBzdWl0ICovXG4gICAgICAgIGZvcihjb25zdCB7aXRlbSwgaW5kZXh9IG9mIGZvckluZGV4KHN1aXRzKSkge1xuICAgICAgICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvKiBTZXQgdGhlIEpPS0VSIHZhbHVlIGlmIHRoZSBzdWl0IGlzIG9mIHR5cGUgam9rZXIgKi9cbiAgICAgICAgICAgICAgICBpZihbX3YuU1VJVF9CLCBfdi5TVUlUX1JdLmluZGV4T2YoaXRlbSkgIT09IC0xKSB2YWx1ZSA9IF92LlZBTFVfSjtcblxuICAgICAgICAgICAgICAgIC8qIFB1c2ggdGhlIGNhcmQgb250byB0aGUgZGVjayAqL1xuICAgICAgICAgICAgICAgIGNhcmRTdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtfdi5TVUlUX0QsIF92LlNVSVRfSCwgX3YuU1VJVF9SXS5pbmRleE9mKGl0ZW0pID09IC0xID8gX3YuQ09MT19CIDogX3YuQ09MT19SLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBgJHtfdi5IVE1MX0JPQ0FSRH0ke2l0ZW1bMF0udG9VcHBlckNhc2UoKX0ke3ZhbHVlfWAsXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IHRoaXMuX2NhbGN1bGF0ZV9yYW5rKHsgc3VpdF9pOiBpbmRleCwgdmFsdWUgfSksXG4gICAgICAgICAgICAgICAgICAgIHN1aXQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyogRW5kIHRoZSBsb29wIGFmdGVyIDEgY2FyZCBpZiBKb2tlcnMgYXJlIGJlaW5nIGdlbmVyYXRlZCAqL1xuICAgICAgICAgICAgICAgIGlmKFtfdi5TVUlUX0IsIF92LlNVSVRfUl0uaW5kZXhPZihpdGVtKSAhPT0gLTEpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaHVmZmxlKGNhcmRTdGFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVhbCBhIGNhcmQgZnJvbSB0aGUgcHJvdmlkZWQgZGVjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q2FyZFtdfSBjYXJkU3RhY2sgVGhlIGRlY2sgdG8gZGVhbCBhIGNhcmQgZnJvbVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlbGV0ZUNhcmRGcm9tU3RhY2s9ZmFsc2VdIERlbGV0ZSB0aGUgY2FyZCBmcm9tIHRoZSBkZWNrIGFmdGVyIGRlYWxpbmcgaXQuIERlZmF1bHQgYGZhbHNlYC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnZXRGcm9tRW5kPWZhbHNlXSBHZXQgdGhlIGNhcmQgZnJvbSB0aGUgYm90dG9tIChlbmQpIG9mIHRoZSBkZWNrLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAgICogQHJldHVybnMge0NhcmR9IGNhcmRcbiAgICAgKiBAbWVtYmVyb2YgQ2FyZHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVhbChjYXJkU3RhY2s6IENhcmRbXSwgZGVsZXRlQ2FyZEZyb21TdGFjazogYm9vbGVhbiA9IGZhbHNlLCBnZXRGcm9tRW5kOiBib29sZWFuID0gZmFsc2UpOiBDYXJkIHtcbiAgICAgICAgaWYoZGVsZXRlQ2FyZEZyb21TdGFjaylcbiAgICAgICAgICAgIHJldHVybiBnZXRGcm9tRW5kID8gY2FyZFN0YWNrLnBvcCgpIDogY2FyZFN0YWNrLnNoaWZ0KCk7ICAgLy9SZW1vdmVzIHRoZSBjYXJkIGZyb20gdGhlIHN0YWNrIGFycmF5LCB0aGVuIHJldHVybnMgaXRcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGdldEZyb21FbmQgPyBjYXJkU3RhY2suc2xpY2UoLTEpWzBdIDogY2FyZFN0YWNrWzBdOyAvL1JldHVybnMgdGhlIGNhcmQgZnJvbSB0aGUgc3RhY2sgYXJyYXlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jYWxjdWxhdGVfcmFuayh7IHN1aXRfaSwgdmFsdWUgfTogeyBzdWl0X2k6IG51bWJlcjsgdmFsdWU6IG51bWJlcjsgfSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoNCAqICh2YWx1ZSAtIDIpKSArIHN1aXRfaTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaHVmZmxlKHN0YWNrOiBBcnJheTxDYXJkPik6IEFycmF5PENhcmQ+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFtzdGFja1tpXSwgc3RhY2tbal1dID0gW3N0YWNrW2pdLCBzdGFja1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24qIGZvckluZGV4PFQ+KGl0ZW1zOiBUW10gfCBJdGVyYWJsZUl0ZXJhdG9yPFQ+KSB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvcihjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIHlpZWxkIHtpdGVtLCBpbmRleH07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxufSIsImltcG9ydCB7IEh0dHBPcHRpb25zIH0gZnJvbSBcIi4vYnV6em9ubGluZV9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHAge1xuICAgIHB1YmxpYyBhc3luYyBmZXRjaChvcHRpb25zOiBIdHRwT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJpLCB0cnVlKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgIT09IHhoci5ET05FKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMClcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zLnJlc3BvbnNlVHlwZSA9PSBcInRleHRcIiA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvYWlyY29uc29sZS10eXBlc2NyaXB0L2FpcmNvbnNvbGUtdHlwZXNjcmlwdC5kLnRzXCIgLz5cblxuLyoqXG4gKiBCdXp6T25saW5lIC0gVGhlIEFpckNvbnNvbGUgQWRhcHRhaW9uXG4gKiBieSBQb3dlciBvZiBJbnRlcmVzdCAtIDIwMTlcbiAqXG4gKi9cbmltcG9ydCBDYXJkcyAgICAgICAgZnJvbSBcIi4vYnV6em9ubGluZV9jYXJkc1wiO1xuaW1wb3J0IFByZWxvYWRlciAgICBmcm9tIFwiLi9idXp6b25saW5lX3ByZWxvYWRlclwiO1xuaW1wb3J0IEF1ZGlvICAgICAgICBmcm9tIFwiLi9idXp6b25saW5lX2F1ZGlvXCI7XG5pbXBvcnQgKiBhcyBfdiAgICAgIGZyb20gXCIuL2J1enpvbmxpbmVfdmFyc1wiO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcblxuLyoqKipcbiAqIEdsb2JhbCBkZWNsYXJhdGlvbnNcbiAqL1xuZGVjbGFyZSBnbG9iYWwge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdsb2JhbCBHYW1lIERhdGEgb2JqZWN0LlxuICAgICAqIFxuICAgICAqIEhvbGRzIHRoZSBnYW1lIGFzc2V0cywgYXMgd2VsbCBhcyB0aGUgY3VycmVudCBnYW1lIHN0YXRlLlxuICAgICAqL1xuICAgIHZhciBnYW1lRGF0YTogR2FtZURhdGE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ2xvYmFsIEFpckNvbnNvbGUgb2JqZWN0LlxuICAgICAqL1xuICAgIHZhciBhaXJDb25zb2xlOiBBaXJDb25zb2xlO1xufVxuXG53aW5kb3cub25sb2FkID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIC8vIHZhciBjYXJkc3RhY2sgPSBjYXJkcy5nZW5lcmF0ZSgpXG4gICAgLy8gY29uc29sZS5sb2coY2FyZHN0YWNrKTtcbiAgICAvLyB2YXIgY2FyZCA9IGNhcmRzLmRlYWwoY2FyZHN0YWNrKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjYXJkLCBjYXJkc3RhY2spO1xuICAgIC8vIHZhciBjYXJkID0gY2FyZHMuZGVhbChjYXJkc3RhY2ssIHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQsIGNhcmRzdGFjayk7XG4gICAgLy8gdmFyIGNhcmQgPSBjYXJkcy5kZWFsKGNhcmRzdGFjaywgZmFsc2UsIHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGNhcmQsIGNhcmRzdGFjayk7XG4gICAgLy8gdmFyIGNhcmQgPSBjYXJkcy5kZWFsKGNhcmRzdGFjaywgdHJ1ZSwgdHJ1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coY2FyZCwgY2FyZHN0YWNrKTtcblxuICAgIGNvbnN0IGJ1enpPbmxpbmUgPSBuZXcgQnV6ek9ubGluZSgpO1xuXG59XG5cblxuY2xhc3MgQnV6ek9ubGluZSB7XG4gICAgcHJpdmF0ZSBfZ2FtZURhdGE6IEdhbWVEYXRhID0ge2dhbWVTdGF0ZTogbnVsbCwgYXNzZXRzOiBudWxsfTtcbiAgICBwcml2YXRlIF9haXJDb25zb2xlOiBBaXJDb25zb2xlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FpckNvbnNvbGUgPSBuZXcgQWlyQ29uc29sZSh7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogQWlyQ29uc29sZS5PUklFTlRBVElPTl9MQU5EU0NBUEUsXG4gICAgICAgICAgICBzZXR1cF9kb2N1bWVudDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJlbG9hZGVyICA9IG5ldyBQcmVsb2FkZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHByZWxvYWRlci5sb2FkKF92LlBSTERfSU1HLCBfdi5QUkxEX0FVRClcbiAgICAgICAgLnRoZW4oZ2FtZWFzc2V0cyA9PiB7XG4gICAgICAgICAgICB2YXIgY2FyZHMgPSBuZXcgQ2FyZHMoKS5nZW5lcmF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZURhdGEuYXNzZXRzID0gZ2FtZWFzc2V0cztcbiAgICAgICAgICAgIHRoaXMuX2dhbWVEYXRhLmdhbWVTdGF0ZS5jYXJkU3RhY2sgPSBjYXJkcztcbiAgICAgICAgICAgIG5ldyBBdWRpbygpLnBsYXkoZ2FtZURhdGEuYXNzZXRzLmF1ZGlvQnVmZmVyW1wiYmdtdXNpYy53YXZcIl0sIHRydWUsIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2FtZURhdGEpO1xuICAgICAgICB9KS5jYXRjaChlID0+IHsgdGhyb3cgZSB9KTtcbiAgICB9XG59IiwiaW1wb3J0IEF1ZGlvIGZyb20gXCIuL2J1enpvbmxpbmVfYXVkaW9cIjtcbmltcG9ydCB7IEdhbWVBc3NldHMgfSBmcm9tIFwiLi9idXp6b25saW5lX2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIHtcbiAgICBwcml2YXRlIF90b0xvYWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9sb2FkZWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl90b0xvYWQgPSB0aGlzLl9sb2FkZWQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZWxvYWQgaW1hZ2UgYW5kIHNvdW5kIGFzc2V0cyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIGltYWdlcyBBcnJheSBvZiBpbWFnZSBmaWxlcy4gU3BlY2lmeSBsb2NhdGlvbiBhbmQgZmlsZSBleHRlbnNpb24gUm9vdCBpcyBgLi9kaXN0L2ltZy9gLlxuICAgICAqIEBwYXJhbSBzb3VuZHMgQXJyYXkgb2Ygc291bmQgZmlsZXMuIFNwZWNpZnkgbG9jYXRpb24sIG5vIGZpbGUgZXh0ZW5zaW9uIFJvb3QgaXMgYC4vZGlzdC9hdWRpb2AuXG4gICAgICogXG4gICAgICogQHJldHVybnMge1Byb21pc2U8R2FtZUFzc2V0cz59IHthdWRpb0J1ZmZlciwgaW1hZ2VCdWZmZXJ9XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWQoaW1hZ2VzOiBBcnJheTxzdHJpbmc+LCBzb3VuZHM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEdhbWVBc3NldHM+IHtcbiAgICAgICAgdGhpcy5fdG9Mb2FkID0gaW1hZ2VzLmxlbmd0aCArIHNvdW5kcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdWRpb0J1ZmZlciA9IGF3YWl0IHRoaXMuX2xvYWRTb3VuZHMoc291bmRzKS5jYXRjaCgoZSkgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBhd2FpdCB0aGlzLl9sb2FkSW1hZ2VzKGltYWdlcykuY2F0Y2goKGUpID0+IHt0aHJvdyBlfSk7XG4gICAgICAgIHJldHVybiB7IGltYWdlQnVmZmVyLCBhdWRpb0J1ZmZlciB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZFNvdW5kcyhzb3VuZHM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEF1ZGlvQnVmZmVyW10+IHtcbiAgICAgICAgbGV0IGF1ZGlvQnVmZmVyQXJyYXk6IEFycmF5PEF1ZGlvQnVmZmVyPiA9IEFycmF5KCk7XG4gICAgICAgIGZvcihjb25zdCBzIG9mIHNvdW5kcykge1xuICAgICAgICAgICAgLy9TdHJpcCBvZmYgdGhlIHBhdGggZm9yIGluZGV4aW5nIHNvdW5kc1xuICAgICAgICAgICAgY29uc3Qgc291bmROYW1lID0gcy5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgICAgICBhdWRpb0J1ZmZlckFycmF5W3NvdW5kTmFtZV0gPSBhd2FpdCBuZXcgQXVkaW8oKS5wcmVsb2FkKHMpLmNhdGNoKGUgPT4ge3Rocm93IGV9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvQnVmZmVyQXJyYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZEltYWdlcyhpbWFnZXM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnRbXT4ge1xuICAgICAgICBsZXQgSFRNTEltYWdlRWxlbWVudEFycmF5OiBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PiA9IEFycmF5KCk7XG4gICAgICAgIGZvcihjb25zdCBpIG9mIGltYWdlcykge1xuICAgICAgICAgICAgLy9TdHJpcCBvZmYgdGhlIHBhdGggZm9yIGluZGV4aW5nIGltYWdlc1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gaS5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgICAgICBIVE1MSW1hZ2VFbGVtZW50QXJyYXlbaW1hZ2VOYW1lXSA9IGF3YWl0IHRoaXMuX2xvYWRJbWFnZShpKS5jYXRjaChlID0+IHt0aHJvdyBlfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBIVE1MSW1hZ2VFbGVtZW50QXJyYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZEltYWdlKGZpbGU6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGltYWdlICAgICA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjICAgICA9IGAuL2Rpc3QvaW1nLyR7ZmlsZX1gO1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkICA9IGUgPT4gcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIF91cGRhdGVQcm9ncmVzc0JhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkKys7XG4gICAgICAgIGNvbnN0IGUgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci0taW5uZXInKTtcbiAgICAgICAgZS5zdHlsZS53aWR0aCA9ICgxMDAgKiAodGhpcy5fbG9hZGVkIC8gdGhpcy5fdG9Mb2FkKSkgKyAnJSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXItLXRleHQnKS5pbm5lckhUTUwgPSBgTG9hZGluZy4uLiAke3RoaXMuX2xvYWRlZH0vJHt0aGlzLl90b0xvYWR9YDtcbiAgICB9XG59IiwiLyogVmFyaWFibGVzIHVzZWQgaW4gQnV6ek9ubGluZSAqL1xuXG4vKioqKlxuICAgICpcbiAgICAqXG4gICAgKiBDb25zdGFudHMgLSBUZXh0cywgY29uc3RhbnQgbnVtYmVycyBhbmQgY29uZmlndXJhYmxlIGdhbWUgb3B0aW9uc1xuICAgICpcbiAgICAqXG4qKioqL1xuXG4vKiBTdGFuZGFyZCBUZXh0cyAqL1xuZXhwb3J0IGNvbnN0IFNVSVRfSDogICAgICAgIHN0cmluZyA9IFwiaGVhcnRzXCI7XG5leHBvcnQgY29uc3QgU1VJVF9TOiAgICAgICAgc3RyaW5nID0gXCJzcGFkZXNcIjtcbmV4cG9ydCBjb25zdCBTVUlUX0M6ICAgICAgICBzdHJpbmcgPSBcImNsdWJzXCI7XG5leHBvcnQgY29uc3QgU1VJVF9EOiAgICAgICAgc3RyaW5nID0gXCJkaWFtb25kc1wiO1xuZXhwb3J0IGNvbnN0IFNVSVRfQjogICAgICAgIHN0cmluZyA9IFwiYmxhY2tqb2tlclwiO1xuZXhwb3J0IGNvbnN0IFNVSVRfUjogICAgICAgIHN0cmluZyA9IFwicmVkam9rZXJcIjtcblxuZXhwb3J0IGNvbnN0IENPTE9fUjogICAgICAgIHN0cmluZyA9IFwicmVkXCI7XG5leHBvcnQgY29uc3QgQ09MT19COiAgICAgICAgc3RyaW5nID0gXCJibGFja1wiO1xuXG5leHBvcnQgY29uc3QgVkFMVV9KOiAgICAgICAgbnVtYmVyID0gMTQ7XG5cbmV4cG9ydCBjb25zdCBIVE1MX0JPQ0FSRDogICBzdHJpbmcgPSBcImJ1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1wiO1xuXG4vKiBQbGF5ZXIgUHJvbXB0cyAqL1xuXG4vKiBDb25zb2xlIFByb21wdHMgLyBEZWJ1Z2dpbmcgKi9cbmV4cG9ydCBjb25zdCBDT05TX0VSUl9BVURJT19OT1RfSU5TVEFOVElBVEFCTEU6IHN0cmluZyA9IFwiQ291bGQgbm90IGluc3RhbnRpYXRlIGF1ZGlvIGVuZ2luZS4gQXVkaW8gaXMgbm90IHN1cHBvcnRlZC5cIjtcblxuLyogUHJlbG9hZGVyOiBJbWFnZXMgKi9cbmV4cG9ydCBjb25zdCBQUkxEX0lNRzogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcImJ1enpvbmxpbmUtTG9nbzR4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfYmFjay5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfQzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9DMTQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0QzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDQucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9ENS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q2LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDcucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9EOC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0Q5LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEwLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDExLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDEzLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfRDE0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g0LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDUucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9INi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0g3LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfSDgucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9IOS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMS5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMi5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxMy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX0gxNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1MyLnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNC5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M1LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzYucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TNy5wbmdcIixcbiAgICBcImNhcmRzL2J1enpvbmxpbmVfX3BsYXlpbmdjYXJkX1M4LnBuZ1wiLFxuICAgIFwiY2FyZHMvYnV6em9ubGluZV9fcGxheWluZ2NhcmRfUzkucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTAucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTEucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTIucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTMucG5nXCIsXG4gICAgXCJjYXJkcy9idXp6b25saW5lX19wbGF5aW5nY2FyZF9TMTQucG5nXCJcbl07XG5cbi8qIFByZWxvYWRlcjogQXVkaW8gKi9cbmV4cG9ydCBjb25zdCBQUkxEX0FVRDogICAgICBzdHJpbmdbXSA9IFtcbiAgICBcInBsYXllcmNvcnJlY3Qud2F2XCIsXG4gICAgXCJhc3NpZ25wbGF5ZXIud2F2XCIsXG4gICAgXCJjb21wbGV0ZWRpc3RyaWJ1dGlvbi53YXZcIixcbiAgICBcInBsYXllcm1pc3NlZC53YXZcIixcbiAgICBcInBsYXllcndyb25nLndhdlwiLFxuICAgIFwic3RhcnRkaXN0cmlidXRpb24ud2F2XCIsXG4gICAgXCJiZ211c2ljLndhdlwiXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=