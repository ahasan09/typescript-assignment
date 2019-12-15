import redis = require('redis');
let instance = null;

export class Redis {
    client: any;

    constructor() {
        if (!instance) {
            this.client = redis.createClient();
            this.client.on('connect', function () {
                console.log('connected');
            });

            this.client.on('error', (err) => {
                console.log('Error ' + err);
            });

            instance = this;
        }
        else {
            return instance;
        }
    }
}