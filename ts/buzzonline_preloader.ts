import Audio from "./buzzonline_audio";
import { GameAssets } from "./buzzonline_interfaces";

export default class Preloader {
    private _toLoad: number;
    private _loaded: number;

    constructor() {
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
    public async load(images: Array<string>, sounds: Array<string>): Promise<GameAssets> {
        this._toLoad = images.length + sounds.length;
        
        const audioBuffer = await this._loadSounds(sounds).catch((e) => {throw e});
        const imageBuffer = await this._loadImages(images).catch((e) => {throw e});
        return { imageBuffer, audioBuffer }
    }

    private async _loadSounds(sounds: Array<string>): Promise<AudioBuffer[]> {
        let audioBufferArray: Array<AudioBuffer> = Array();
        for(const s of sounds) {
            //Strip off the path for indexing sounds
            const soundName = s.split('/').pop();

            audioBufferArray[soundName] = await new Audio().preload(s).catch(e => {throw e});
            this._updateProgressBar();
        }
        return audioBufferArray;
    }

    private async _loadImages(images: Array<string>): Promise<HTMLImageElement[]> {
        let HTMLImageElementArray: Array<HTMLImageElement> = Array();
        for(const i of images) {
            //Strip off the path for indexing images
            const imageName = i.split('/').pop();

            HTMLImageElementArray[imageName] = await this._loadImage(i).catch(e => {throw e});
            this._updateProgressBar();
        }
        return HTMLImageElementArray;
    }

    private async _loadImage(file: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            let image     = new Image();
            image.src     = `./dist/img/${file}`;
            image.onerror = e => reject(e);
            image.onload  = e => resolve(image);
        });
    }
    
    private _updateProgressBar(): void {
        this._loaded++;
        const e = <HTMLElement>document.querySelector('.loader--inner');
        e.style.width = (100 * (this._loaded / this._toLoad)) + '%';
        document.querySelector('.loader--text').innerHTML = `Loading... ${this._loaded}/${this._toLoad}`;
    }
}