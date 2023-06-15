export class Timer {
    static instance;
    time = 0;
    tickListeners = [];
    constructor() { }
    static getInstance() {
        if (!Timer.instance) {
            Timer.instance = new Timer();
        }
        return Timer.instance;
    }
    timeRunning() {
        setInterval(() => {
            this.time++;
            this.notifyListeners();
        }, 1000);
    }
    getTime() {
        return this.time;
    }
    addTickListener(listener) {
        this.tickListeners.push(listener);
    }
    notifyListeners() {
        for (const listener of this.tickListeners) {
            listener(this.time);
        }
    }
}
