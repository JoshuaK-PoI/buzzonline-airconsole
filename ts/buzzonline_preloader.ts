import Audio from "./buzzonline_audio";

export default class Preloader {
    private _audioLoader: Audio;
    private _toLoad: number;
    private _loaded: number;

    constructor() {
        this._audioLoader = new Audio;
        this._toLoad = this._loaded = 0;
    }

    public async load(images: Array<string>, sounds: Array<string>): Promise<boolean> {
        this._toLoad = images.length + sounds.length;
        
        if(await this._loadSounds(sounds) == false || await this._loadImages(images) == false)
            return false;

        // Start the background music as soon as all files have been loaded
        
        // Note: Will only work in an iframe window with autoplaying on. 
        // AudioContext starts in suspended mode on a regular webpage 
        // (in Chrome because of autoplay policy)
        if(this._loaded == this._toLoad)
            this._audioLoader.play("bgmusic.wav", true, 1);

        return true;
    }

    private async _loadSounds(sounds: Array<string>): Promise<boolean> {

        for(let s of sounds) {
            if(this._audioLoader.preload(s)) {
                this._loaded++;
                this._updateProgressBar();
            } else return false;
        }
        return true;
    }

    private async _loadImages(images: Array<string>): Promise<boolean> {
        let errorflg: boolean = false;
        for(let i of images) {
            let image = new Image();
            image.src = `./dist/img/${i}`;

            image.onerror = () => {errorflg = true;}
            image.onload = () => {
                this._loaded++;
                this._updateProgressBar();
            }

        }
        
        //Returns true if no errors occured
        return !errorflg;
    }

    private _updateProgressBar(): void {
        const e = <HTMLElement>document.querySelector('.loader--inner');
        e.style.width = (100 * (this._loaded / this._toLoad)) + '%';
        document.querySelector('.loader--text').innerHTML = `Loading... ${this._loaded}/${this._toLoad}`;
    }
}