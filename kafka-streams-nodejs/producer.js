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
            topic: 'test-topic',
            messages: [
                { value: 'Hello Valentyn' },
            ],
        });

        await producer.disconnect()
    } catch (err) {
        console.error(err);
    }
})();


