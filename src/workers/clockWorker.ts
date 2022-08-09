class Clock {
    private date: Date;

    constructor() {
        this.date = new Date();
    }

    private addZeroBeforeOnlyOneNumber(number: number) {
        let stringOfNumber: string = number.toString();
        if (stringOfNumber.length === 1) {
            stringOfNumber = `0${number}`;
        };
        return stringOfNumber;
    }

    private getHours() {
        return this.addZeroBeforeOnlyOneNumber(this.date.getHours());
    }

    private getMinutes() {
        return this.addZeroBeforeOnlyOneNumber(this.date.getMinutes());
    }

    private getSeconds() {
        return this.addZeroBeforeOnlyOneNumber(this.date.getSeconds());
    }
    
    getTime() {
        return `${this.getHours()} : ${this.getMinutes()} : ${this.getSeconds()}`;
    }
}

setInterval(() => {
    const clock = new Clock();
    const time = clock.getTime();

    postMessage(time);
}, 1000)
