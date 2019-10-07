
import * as _v from "./buzzonline_vars";
import ScreenHandler from "./buzzonline_screen";
import Http from "./buzzonline_http";

export default class Audio {
    private _audioContext: AudioContext;
    private _audioGain: GainNode;
    private _audioBuffer: AudioBuffer[];

    constructor() {
        this._audioContext = new AudioContext();
        this._audioGain = this._audioContext.createGain();
    }

    public async preload(file: string) {
        var response: ArrayBuffer = await new Http().fetch({
            method: 'GET',
            uri: '',
            responseType: "arraybuffer"
        }).catch((reason) => {
            console.error(reason);
            return;
        });

        this._audioContext.decodeAudioData(response, (buffer) => {
            /* TODO: Update the preloader */

            this._audioBuffer[file] = buffer;

            /* TODO: Determine if all are loaded and start the background music loop */
        });
    }

    public play(file: string, repeat: boolean = false, gain: number = 0.2) {
        var source = this._audioContext.createBufferSource();
        source.buffer = this._audioBuffer[`${file}.${_v.AUDIO_EXT}`];
        source.connect(this._audioGain);
        this._audioGain.connect(this._audioContext.destination);
        this._audioGain.gain.setValueAtTime(gain, this._audioContext.currentTime);

        if(repeat)
            source.loop = true;

        source.start(0);
    }

}