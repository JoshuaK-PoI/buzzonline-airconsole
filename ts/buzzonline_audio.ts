import Http from "./buzzonline_http";

export default class Audio {
    private _audioContext: AudioContext;
    private _audioGain: GainNode;
    
    constructor() {
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
    public async preload(file: string): Promise<AudioBuffer> {
        const response = await new Http().fetch({
            method:         "GET",
            uri:            `./dist/audio/${file}`,
            responseType:   "arraybuffer"
        })
        .catch(e => {throw e});
        
        return await this._audioContext.decodeAudioData(response);
    }

    /**
     * Play a file in the buffer.
     * 
     * @param {string}  file    The name of the file to play. File extension must be included.
     * @param {boolean} repeat  Loop the audio when it reaches the end. Default `false`.
     * @param {number}  gain    Gain control for the gloabal audio context. Default 0.2
     */
    public play(audioBuffer: AudioBuffer, repeat: boolean = false, gain: number = 0.2): void {
        
        var source = this._audioContext.createBufferSource();
        source.buffer = audioBuffer;

        source.connect(this._audioGain);
        this._audioGain.connect(this._audioContext.destination);
        this._audioGain.gain.setValueAtTime(gain, this._audioContext.currentTime);

        if(repeat)
            source.loop = true;

        source.start(0);
    }

}