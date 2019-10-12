
import * as _v from "./buzzonline_vars";
import Http from "./buzzonline_http";

export default class Audio {
    private _audioContext: AudioContext;
    private _audioGain: GainNode;
    private _audioBuffer: Array<AudioBuffer> = [];

    constructor() {
        this._audioContext = new AudioContext();
        this._audioGain = this._audioContext.createGain();
    }

    /**
     * Preload a file from the local game data into the audio buffer.
     * 
     * @param {string} file The name of the audio file to load. File extension must be included. Files get loaded from `./dist/audio`
     */
    public async preload(file: string): Promise<boolean> {
        //Connect to the Http class to fetch a file from the local game data
        var response: ArrayBuffer = await new Http().fetch({
            method: 'GET',
            uri: `./dist/audio/${file}`,
            responseType: "arraybuffer"
        }).catch((reason) => {
            console.error(reason);
            throw Error("There was an error fetching the audio file.");
        });

        //Decode the fetched data and place it in the buffer
        this._audioContext.decodeAudioData(response, (buffer) => {
            this._audioBuffer.push(buffer);
        });
        return true;
    }

    /**
     * Play a file in the buffer.
     * 
     * @param {string}  file    The name of the file to play. File extension must be included.
     * @param {boolean} repeat  Loop the audio when it reaches the end. Default `false`.
     * @param {number}  gain    Gain control for the gloabal audio context. Default 0.2
     */
    public play(file: string, repeat: boolean = false, gain: number = 0.2) {
        var source = this._audioContext.createBufferSource();
        source.buffer = this._audioBuffer[`${file}`];
        source.connect(this._audioGain);
        this._audioGain.connect(this._audioContext.destination);
        this._audioGain.gain.setValueAtTime(gain, this._audioContext.currentTime);

        if(repeat)
            source.loop = true;

        source.start(0);
    }

}