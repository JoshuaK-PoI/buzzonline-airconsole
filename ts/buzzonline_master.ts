/// <reference path="../node_modules/airconsole-typescript/airconsole-typescript.d.ts" />

/**
 * BuzzOnline - The AirConsole Adaptaion
 * by Power of Interest - 2019
 *
 */
import Cards from "./buzzonline_cards";
import Preloader from "./buzzonline_preloader";


window.onload = (_e: Event) => {
    var cards = new Cards();
    var cardstack = cards.generate()
    console.log(cardstack);
    var card = cards.deal(cardstack);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, true);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, false, true);
    console.log(card, cardstack);
    var card = cards.deal(cardstack, true, true);
    console.log(card, cardstack);

    const airconsole: AirConsole = new AirConsole();
    airconsole.getDeviceId;
    
    const preloader = new Preloader();
    preloader.load([
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
    ], [
        "playercorrect.wav",
        "assignplayer.wav",
        "completedistribution.wav",
        "playermissed.wav",
        "playerwrong.wav",
        "startdistribution.wav",
        "bgmusic.wav"
    ]);
}
