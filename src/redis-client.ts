import redis = require('redis');
let instance = null;

export class Redis {
    client: any;

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

            instance = this;
        }
        else {
            return instance;
        }
    }
}