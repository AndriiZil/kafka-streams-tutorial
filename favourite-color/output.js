const { KafkaStreams } = require('kafka-streams');

const config = require('../options.json');
const factory = new KafkaStreams(config);

const myConsumerStream =
    factory
        .getKStream()
        .from('favourite-color-input')

myConsumerStream
    .mapJSONConvenience()
    .mapWrapKafkaValue()
    .tap(console.log)
    .to('output-color-topic');

myConsumerStream.start();
