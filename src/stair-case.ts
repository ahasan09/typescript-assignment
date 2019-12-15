export class StairCase {
    private _num: number;

    constructor() {
    }

    set num(num: number) {
        this._num = num;
    }

    printStairCase(): void {
        // this.printFirstStairCase(this._num);
        // this.printSecondStairCase(this._num);
        // this.printThirdStairCase(this._num);
        // this.printFourthStairCase(this._num);
        // this.printFifthStairCase(this._num);
        this.printSixthStairCase(this._num);
    }

    private printFirstStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.1 START==========`);

        let space: number, star: number, stair: string;

        for (let i = 0; i < num; i++) {
            space = num - 1 - i;
            star = i + 1;
            stair = '*'.repeat(star) + ' '.repeat(space);
            console.log(stair);
        }

        console.log(`==========StairCase ${num} for 3.1 END==========`);
    }

    private printSecondStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.2 START==========`);

        let space: number, star: number, stair: string;

        for (let i = 0; i < num; i++) {
            space = num - 1 - i;
            star = i + 1;
            stair = ' '.repeat(space) + '*'.repeat(star);
            console.log(stair);
        }

        console.log(`==========StairCase ${num} for 3.2 END==========`);
    }

    private printThirdStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.3 START==========`);

        let space: number, midspace: number, star: number, stair: string;

        for (let i = 0; i < num; i++) {
            space = num - 1 - i;
            midspace = num - 2 - space + i;
            star = i === 0 ? 0 : 1;
            stair = ' '.repeat(space) + '*' + ' '.repeat(midspace < 0 ? 0 : midspace) + '*'.repeat(star);
            console.log(stair);
        }

        console.log(`==========StairCase ${num} for 3.3 END==========`);
    }

    private printFourthStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.4 START==========`);
        for (let i = 0; i < num; i++) {
            let line = ""
            for (let j = 0; j < num; j++) {

                if (i == j || j == num - 1 - i) {
                    line += "*"
                }
                else {
                    line += " "
                }
            }
            console.log(line)
        }

        console.log(`==========StairCase ${num} for 3.4 END==========`);
    }

    private printFifthStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.5 START==========`);
        let stairs = [];
        if (num < 3) {
            for (let i = 0; i < num; i++) {
                console.log("*");
            }
        }
        else {
            const isEven = num % 2 == 0;
            if (isEven)
                stairs = stairs.concat(this.generateStairs(num - 1, num));
            else
                stairs = stairs.concat(this.generateStairs(num, num));

            const length = isEven ? stairs.length : stairs.length - 1;
            for (let i = length; i > 0; i--) {
                console.log(stairs[i - 1]);
            }
        }

        console.log(`==========StairCase ${num} for 3.5 END==========`);
    }

    private generateStars(length: number, starCount: number) {
        let spaces = (length - starCount) / 2
        let line = ' '.repeat(spaces) + '*'.repeat(starCount) + ' '.repeat(spaces);
        return line
    }

    private generateStairs(endValue: number, totalLength: number) {
        let staris = [];
        for (let i = 1; i <= endValue; i += 2) {
            const stair = this.generateStars(totalLength, i);
            staris.push(stair);
            console.log(this.generateStars(totalLength, i))
        }
        return staris;
    }

    private printSixthStairCase(num: number) {
        console.log(`==========StairCase ${num} for 3.6 START==========`);

        console.log('A'.repeat(num - 1) + '+' + 'B'.repeat(num - 1));
        for (let i = 2; i <= num; i++) {
            console.log('A'.repeat(num - i) + '+' + 'E'.repeat(i * 2 - 3) + '+' + 'B'.repeat(num - i));
        }

        for (let i = 1; i < num - 1; i++) {
            console.log('C'.repeat(i) + '+' + 'E'.repeat(2 * (num - i) - 3) + '+' + 'D'.repeat(i));
        }
        console.log('C'.repeat(num - 1) + '+' + 'D'.repeat(num - 1));

        console.log(`==========StairCase ${num} for 3.5 END==========`);
    }
}