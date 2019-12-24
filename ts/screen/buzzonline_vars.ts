/* Variables used in BuzzOnline */

/****
    *
    *
    * Constants - Texts, constant numbers and configurable game options
    *
    *
****/

/* Game / Engine settings */
export const __DEBUG_MODE:  boolean = true;

export const PHS_TMOUT:     number = 2000;

/* AirConsole Adapter notification states */
export const N_GSTART:      number = 100;


export const N_PCONNECT:    number = 201;
export const N_PDCONNECT:   number = 202;
export const N_PNOTIF:      number = 203;


/* Standard Texts */
export const SUIT_H:        string = "hearts";
export const SUIT_S:        string = "spades";
export const SUIT_C:        string = "clubs";
export const SUIT_D:        string = "diamonds";
export const SUIT_B:        string = "blackjoker";
export const SUIT_R:        string = "redjoker";

export const COLO_R:        string = "red";
export const COLO_B:        string = "black";

export const VALU_J:        number = 14;

export const HTML_BOCARD:   string = "buzzonline__playingcard_";

export const METH_GET:      string = 'GET';

export const RETY_ABFR:     XMLHttpRequestResponseType = "arraybuffer";
export const RETY_TEXT:     XMLHttpRequestResponseType = "text";

/* Player Prompts */

/* Console Prompts / Debugging */
export const CONS_ERR_AUDIO_NOT_INSTANTIATABLE: string = "Could not instantiate audio engine. Audio is not supported.";

/* Preloader: Images */
export const PRLD_IMG:      string[] = [
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
export const PRLD_AUD:      string[] = [
    "playercorrect.wav",
    "assignplayer.wav",
    "completedistribution.wav",
    "playermissed.wav",
    "playerwrong.wav",
    "startdistribution.wav",
    "bgmusic.wav"
];