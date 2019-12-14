import { CommandType } from './enum';
import { FizzBuzz } from './fizz-buzz';
import { LeapYear } from './leap-year';
import { PrimeNumber } from './prime-number';
import { StairCase } from './stair-case';
import { Task } from './task';

export class CommandArgument {
	fizzBuzz: FizzBuzz;
	leapYear: LeapYear;
	primeNumber: PrimeNumber;
	stairCase: StairCase;
	task: Task;

	constructor() {
		this.fizzBuzz = new FizzBuzz();
		this.leapYear = new LeapYear();
		this.primeNumber = new PrimeNumber();
		this.stairCase = new StairCase();
		this.task = new Task();
	}

	private executeFizzBuzz(inputNumber: number) {
		this.fizzBuzz.num = inputNumber;
		console.log(`FizzBuzz of ${inputNumber} is: ${this.fizzBuzz.getFizzBuzz().join(' ')}`);
	}

	private executeLeapYear(inputNumber: number) {
		this.leapYear.num = inputNumber;
		console.log(`LeapYear of ${inputNumber} -> ${this.leapYear.getLeapYear()}`);
	}

	private executePrimeNumber(inputNumber: number) {
		this.primeNumber.num = inputNumber;
		console.log(`PrimeNumber upto ${inputNumber} -> ${this.primeNumber.getPrimeNumbers().join(' ')}`);
	}

	private executeStairCase(inputNumber: number) {
		this.stairCase.num = inputNumber;
		this.stairCase.printStairCase();
	}

	private taskExecutor(argc: string[]) {
		switch (argc[1]) {
			case CommandType.ADD:
				let task = argc[2].replace(/"/g, '');

				for (let i = 3; i < argc.length; i++) {
					task += ` ${argc[i]}`;
				}
				this.task.add(task);
				break;
			case CommandType.CHECK:
				if (this.isValidNumber(argc[2])) this.task.check(+argc[2]);
				break;
			case CommandType.DELETE:
				if (this.isValidNumber(argc[2])) this.task.del(+argc[2]);
				break;
			case CommandType.HELP:
				this.usage();
				break;
			case CommandType.EXIT:
				process.exit(1);
				break;
			default:
				console.log('\x1b[91mCommand not found!!\x1b[0m');
				this.usage();
				break;
		}
	}

	private usage() {
		console.log('\x1b[32mUsage: [task|fizzbuzz|leapyear|prime|printstar|help|exit] [number]\x1b[0m');
		console.log('\x1b[36m`fizzbuzz` can be single command without value\nfizzbuzz default value is 100.\x1b[0m');
		console.log('\x1b[32mUsage:task [add|check|del|help] [task]');
		console.log('\x1b[36m`task` is only a string when using `add` and a number\nfor all other commands.\x1b[0m');
		console.log('\x1b[36m`number` should be valid integer for all commands.\x1b[0m');
	}

	execute(argc: string[]) {
		switch (argc[0]) {
			case CommandType.FIZZBUZZ:
				if (argc.length === 1) argc[1] = '100';

				if (this.isValidArgument(argc) && this.isValidNumber(argc[1])) this.executeFizzBuzz(+argc[1]);
				break;
			case CommandType.LEAPYEAR:
				if (this.isValidArgument(argc) && this.isValidNumber(argc[1])) this.executeLeapYear(+argc[1]);
				break;
			case CommandType.PRIME:
				if (this.isValidArgument(argc) && this.isValidNumber(argc[1])) this.executePrimeNumber(+argc[1]);
				break;
			case CommandType.STAIRCASE:
				if (this.isValidArgument(argc) && this.isValidNumber(argc[1])) this.executeStairCase(+argc[1]);
				break;
			case CommandType.TASK:
				this.handleTaskCommand(argc);
				break;
			case CommandType.HELP:
				this.usage();
				break;
			case CommandType.EXIT:
				process.exit();
				break;
			default:
				console.log('\x1b[91mCommand not found!!\x1b[0m');
				this.usage();
				break;
		}
	}

	private handleTaskCommand(argc: string[]) {
		if (argc && argc.length === 1) {
			this.task.list();
		} else if (this.isValidTaskArgument(argc)) {
			this.taskExecutor(argc);
		}
	}

	private isValidTaskArgument(argc: string[]) {
		if (!argc || argc.length < 3) {
			console.error(`\x1b[36mInvalid number of Task arguments ${argc}\x1b[0m`);
		} else return true;
	}

	private isValidArgument(argc: string[]) {
		if (!argc || argc.length !== 2) {
			console.error(`\x1b[36mInvalid number of arguments ${argc}\x1b[0m`);
		} else return true;
	}

	private isValidNumber(inputNumber) {
		if (!/^\d+$/.test(inputNumber)) {
			console.error(`\x1b[36mInvalid integer input ${inputNumber}\x1b[0m`);
		} else return true;
	}

	invalidCommandMessage() {
		console.log('Please Enter a valid command !!');
	}
}
