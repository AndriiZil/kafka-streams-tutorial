const { KafkaStreams } = require('kafka-streams');
const config = require('./options.json');

const kafkaStreams = new KafkaStreams(config);

const kafkaTopicName = 'test-topic';
const stream = kafkaStreams.getKStream();

stream.to(kafkaTopicName);

(async () => {
    try {
        await stream.start();

        await stream.writeToStream(JSON.stringify({ message: 'Some Text' }));

        setTimeout(() => kafkaStreams.closeAll(), 500);

    } catch (err) {
        console.log(err);
    }
})();
