class Clock {
    constructor() {
        this.clockTime = document.getElementById('clockTime');
    }
    getTime() {
        return new Date();
    };
    start() {
        this.interval = setInterval(this.render.bind(this), 250);
    };
    stop() {
        clearInterval(this.interval);
    };
    render() {  
        this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
        this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();  
        this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();         
    
        this.clockTime.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;
    };

};
let clock = new Clock()

class СlockFullFormat extends Clock {
    constructor() {
        super();
    }
    render() {
        this.clockTime.innerHTML = this.getTime().getHours() + ":" + this.getTime().getMinutes() + ":" + this.getTime().getSeconds();          
    };
}

class СlockShortFormat extends Clock {
    constructor() {
        super();
    };
    render() {
        this.clockTime.innerHTML = this.getTime().getHours() + ":" +this.getTime().getMinutes();      
    };
};

let clockFullFormat = new СlockFullFormat();
let clockShortFormat = new СlockShortFormat();

clockFullFormat.start();

this.clockTime.addEventListener('click', () => {
    this.clockTime.classList.toggle('fullFormat');
    if (this.clockTime.classList.contains('fullFormat')) {   
        clockFullFormat.start();
        clockShortFormat.stop();
    } else {
        clockShortFormat.start();
        clockFullFormat.stop();
    };
});