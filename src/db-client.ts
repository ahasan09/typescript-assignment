import redis = require('redis');
let instance = null;

export class DbClient {
	client: any;
	getAsync: any;

	constructor() {
		if (!instance) {
			this.client = redis.createClient();
			this.client.on('connect', () => {
				console.log('connected');
			});

			this.client.on('error', (err: any) => {
				console.log('Error ' + err);
			});

			this.client.on('end', () => {
				console.log('connection close');
			});

			const { promisify } = require('util');
			this.getAsync = promisify(this.client.get).bind(this.client);

			instance = this;
		} else {
			return instance;
		}
	}

	setData(key: string, value: any) {
		this.client.set(key, value, (err: any, reply: any) => {
			console.log(`Reply from redis-server after set data: ${reply}`);
		});
	}
}
