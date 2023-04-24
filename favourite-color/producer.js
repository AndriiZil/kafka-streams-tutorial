'use strict';

const { Kafka, Partitioners } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

(async () => {
    try {
        await producer.connect();

        await producer.send({
            topic: 'favourite-color-input',
            messages: [
                { key: 'Andrii', value: '2' },
            ],
        });

        await producer.disconnect();
    } catch (err) {
        console.error(err);
    }
})();
