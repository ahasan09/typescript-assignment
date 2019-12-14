#!/usr/bin/env node
import redis = require('redis');
import readline = require('readline');
import { CommandArgument } from './command-argument';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

class Main {
	private _command: CommandArgument;

	constructor() {
		this._command = new CommandArgument();
		let client = redis.createClient();
		client.on('connect', function() {
			console.log('connected');
		});

		client.on('error', (err) => {
			console.log('Error ' + err);
		});
	}

	recursiveAsyncReadLine() {
		rl.question(`\x1b[35m\x1b[4mEnter Command [type 'help' for get all command]: \x1b[0m`, (command) => {
			//const argc = command.split(/(\s+)/).filter((e) => e.trim());
			const argc = command.match(/(?:[^\s"]+|"[^"]*")+/g);
			if (argc.length) {
				this._command.execute(argc);

				this.recursiveAsyncReadLine();
			} else {
				this._command.invalidCommandMessage();
				this.recursiveAsyncReadLine();
			}
		});
	}
}

const main = new Main();
main.recursiveAsyncReadLine();
