export class FizzBuzz {
    private _num: number;

    constructor() {
    }

    set num(num: number) {
        this._num = num;
    }

    getFizzBuzz(): any[] {
        let i: number, results = [];

        for (i = 0; i < this._num;) {
            results.push((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
        }

        return results;
    }
}