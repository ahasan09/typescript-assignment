export class PrimeNumber {
    private _num: number;

    constructor() {
    }

    set num(num: number) {
        this._num = num;
    }

    getPrimeNumbers(): number[] {
        let store = [], primes: number[] = [], i: number, j: number;

        for (i = 2; i <= this._num; ++i) {
            if (!store[i]) {
                primes.push(i);
                for (j = i << 1; j <= this._num; j += i) {
                    store[j] = true;
                }
            }
        }

        return primes;
    }
}