export class LeapYear {
    private _num: number;

    constructor() {
    }

    set num(num: number) {
        this._num = num;
    }

    getLeapYear(): boolean {
        let isLeapYear: boolean;

        if (this._num % 400 === 0 || (this._num % 400 !== 0 && this._num % 100 !== 0 && this._num % 4 === 0))
            isLeapYear = true;
        else
            isLeapYear = false;

        return isLeapYear
    }
}