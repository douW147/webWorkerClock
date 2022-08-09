class Clock {
    date;
    constructor() {
        this.date = new Date();
    }
    addZeroBeforeOnlyOneNumber(number) {
        let stringOfNumber = number.toString();
        if (stringOfNumber.length === 1) {
            stringOfNumber = `0${number}`;
        }
        ;
        return stringOfNumber;
    }
    getHours() {
        return this.addZeroBeforeOnlyOneNumber(this.date.getHours());
    }
    getMinutes() {
        return this.addZeroBeforeOnlyOneNumber(this.date.getMinutes());
    }
    getSeconds() {
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
}, 1000);
