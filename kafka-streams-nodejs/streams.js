const { KafkaStreams } = require('kafka-streams');
const config = require('../options.json');

const kafkaStreams = new KafkaStreams(config);

const kafkaTopicName = 'test-topic';
const stream = kafkaStreams.getKStream(kafkaTopicName);

stream.forEach(message => console.log(message.value.toString()));
stream.mapJSONConvenience().forEach(message => console.log(message));

stream.start().then(() => {
    console.log("stream started, as kafka consumer is ready.");
}, error => {
    console.log("streamed failed to start: " + error);
});
