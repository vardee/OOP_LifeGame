export class Timer {
    private static instance: Timer;
    private time = 0;
    private tickListeners: ((time: number) => void)[] = [];
  
    private constructor() {}
  
    public static getInstance(): Timer {
      if (!Timer.instance) {
        Timer.instance = new Timer();
      }
      return Timer.instance;
    }
  
    public timeRunning() {
      setInterval(() => {
        this.time++;
        this.notifyListeners();
      }, 1000);
    }
  
    public getTime(): number {
      return this.time;
    }

    public zeroTime(){
        this.time = 0
    }
  
    public addTickListener(listener: (time: number) => void) {
      this.tickListeners.push(listener);
    }
  
    private notifyListeners() {
      for (const listener of this.tickListeners) {
        listener(this.time);
      }
    }
  }