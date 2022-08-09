class Clock {
    date;
    constructor() {
        this.date = new Date();
    }
    getHours() {
        return this.date.getHours();
    }
    getMinutes() {
        return this.date.getMinutes();
    }
    getSeconds() {
        return this.date.getSeconds();
    }
    getTime() {
        return `${this.getHours()} : ${this.getMinutes()} : ${this.getSeconds()}`;
    }
}
export default Clock;
