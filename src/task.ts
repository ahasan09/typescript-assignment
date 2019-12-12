import fs = require('fs');
import path = require('path');
const appRoot = path.resolve(__dirname);
const TASK_JSON_PATH = `${appRoot}/database.json`;

export class Task {

    constructor() {
        if (!fs.existsSync(TASK_JSON_PATH)) {
            console.log("Initialising storage.\n Creating `database.json` file");
            this.setData([]);
        }
    }

    add(task: string): void {
        //get data
        var data = this.getData();

        //add item
        data.push({ task: task, completed: false });

        //set data
        this.setData(data);

        //list
        this.list();
    }

    //check task
    check(task) {
        var data = this.getData();

        //modify the data (toggle)
        data[task].completed = !data[task].completed;

        this.setData(data);

        this.list();
    }

    //delete task
    del(task) {
        var data = this.getData();

        //delete task
        data.splice(task, task + 1);

        //set task on store
        this.setData(data);

        //show all task
        this.list();
    }

    //list all tasks
    list() {
        var data = this.getData();

        if (data.length > 0) {
            //print the list. using ANSI colors and formating
            console.log("\x1b[93m\x1b[4mTask list:\x1b[24m");
            data.forEach(function (task, index) {
                console.log(index + 1 + ".", " [" + (task.completed ? "\x1b[92m✓\x1b[93m" : " ") + "] ", task.task);
            });

        } else {
            console.log("\x1b[91mNo tasks added!!");
        }
    }

    private getData() {
        //read file contents
        let data = fs.readFileSync(TASK_JSON_PATH);

        return JSON.parse(data.toString());
    }

    private setData(data: string[]) {
        fs.writeFileSync(TASK_JSON_PATH, JSON.stringify(data));
    }

}