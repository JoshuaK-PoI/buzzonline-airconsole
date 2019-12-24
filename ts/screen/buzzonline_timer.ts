import { iBuzzOnlineTimer } from "./buzzonline_interfaces";

export default class BuzzOnlineTimer implements iBuzzOnlineTimer {
    id: ReturnType<typeof setTimeout>;    
    started: Date;
    remaining: number;
    running: boolean;

    constructor(delay: number) {
        this.remaining = delay;
    }

    start(): void {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(() => {}, this.remaining)
    }
    
    pause(): void {
        this.running = false;
        clearTimeout(this.id);  
        this.remaining -= new Date().getTime() - this.started.getTime();
    }
    
    get_time_left(): number {
        if(this.running) {
            this.pause();
            this.start();
        }
        return this.remaining;
    }
    
    get_state_running(): boolean {
        return this.running;
    }
}