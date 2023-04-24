const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
});

const topic = 'output-color-topic';
const consumer = kafka.consumer({ groupId: 'test-group' });

(async () => {
    try {
        await consumer.connect()
        await consumer.subscribe({ topic, fromBeginning: true })
        await consumer.run({
            // eachBatch: async ({ batch }) => {
            //   console.log(batch)
            // },
            eachMessage: async ({ message }) => {
                console.log(`MESSAGE: ${message.key.toString()} - ${message.value.toString()}`)
            },
        })
    } catch (err) {
        console.error(err);
    }
})();
