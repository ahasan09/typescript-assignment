#!/usr/bin/env node

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
    }

    recursiveAsyncReadLine() {
        rl.question(`Enter Command [type 'help' for get all command]: `, (command) => {
            console.log(process.argv[0]);
            const argc = command.split(/(\s+)/).filter(e => e.trim());
            console.log(argc);
            if (argc.length) {
                this._command.execute(argc);

                this.recursiveAsyncReadLine();
            }
            else {
                this._command.invalidCommandMessage();
                this.recursiveAsyncReadLine();
            }
        });
    }
}

const main = new Main();
main.recursiveAsyncReadLine();