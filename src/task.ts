import fs = require('fs');
import path = require('path');
const appRoot = path.resolve(__dirname);
const TASK_JSON_PATH = `${appRoot}/database.json`;

export class Task {
	constructor() {
		if (!fs.existsSync(TASK_JSON_PATH)) {
			console.log('Initialising storage.\n Creating `database.json` file');
			this.setData([]);
		}
	}

	add(task: string): void {
		//get data
		let data = this.getData();

		//add item
		data.push({ task: task, completed: false });

		//set data
		this.setData(data);

		//list
		this.list();
	}

	//check task
	check(task) {
		let data = this.getData();
		if (data.length && data[task]) {
			data[task].completed = !data[task].completed;

			this.setData(data);

			this.list();
		} else {
			console.log('\x1b[91mNo tasks found!!\x1b[0m');
		}
	}

	//delete task
	del(task) {
		let data = this.getData();

		//delete task
		data.splice(task, task + 1);

		//set task on store
		this.setData(data);

		//show all task
		this.list();
	}

	//list all tasks
	list() {
		let data = this.getData();
		if (data.length > 0) {
			console.log('\x1b[93m\x1b[4mTask list:\x1b[0m');
			data.forEach((task, index) => {
				console.log(`${index + 1}. [${task.completed ? '\x1b[92m✓\x1b[0m' : ' '}] ${task.task}`);
			});
		} else {
			console.log('\x1b[91mNo tasks added!!\x1b[0m');
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
