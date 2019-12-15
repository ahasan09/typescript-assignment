import { DbClient } from './db-client';
import { DbKey } from './enum';

export class Task {
	private _dbClient: DbClient;

	constructor() {
		this._dbClient = new DbClient();
	}

	async add(task: string) {
		if (!task.trim()) {
			console.log('\x1b[91mTask should not be empty!!\x1b[0m');
			return;
		}
		//get data
		const data = await this._dbClient.getAsync('Task');
		const modifiedData = this.getModifedData(data);

		//add item
		modifiedData.push({ task: task, completed: false });

		//set data
		this.setData(modifiedData);

		//list
		this.list();
	}

	//check task
	async check(task) {
		task = task > 0 ? task - 1 : task;

		const data = await this._dbClient.getAsync('Task');
		const modifiedData = this.getModifedData(data);
		if (modifiedData.length && modifiedData[task]) {
			modifiedData[task].completed = !modifiedData[task].completed;

			this.setData(modifiedData);

			this.list();
		} else {
			console.log('\x1b[91mNo tasks found!!\x1b[0m');
		}
	}

	//delete task
	async del(task) {
		task = task > 0 ? task - 1 : task;
		const data = await this._dbClient.getAsync(DbKey.TASK);
		let modifiedData = this.getModifedData(data);

		//delete task
		modifiedData.splice(task, 1);

		//set task on store
		this.setData(modifiedData);

		//show all task
		this.list();
	}

	//list all tasks
	async list() {
		const data = await this._dbClient.getAsync(DbKey.TASK);
		let modifiedData = this.getModifedData(data);
		if (modifiedData.length > 0) {
			console.log('\x1b[93m\x1b[4mTask list:\x1b[0m');
			modifiedData.forEach((task, index) => {
				console.log(`${index + 1}. [${task.completed ? '\x1b[92m✓\x1b[0m' : ' '}] ${task.task}`);
			});
		} else {
			console.log('\x1b[91mNo tasks added!!\x1b[0m');
		}
	}

	private getModifedData(data: any) {
		return data ? JSON.parse(data) : [];
	}

	private setData(data: string[]) {
		this._dbClient.setData(DbKey.TASK, JSON.stringify(data));
	}
}
