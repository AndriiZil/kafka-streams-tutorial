'use strict';

const { KafkaStreams } = require('kafka-streams');

const config = require('../options.json');
const factory = new KafkaStreams(config);

const toKv = message => {
    return {
        key: message.key.toString(),
        value: message.value.toString()
    };
};

const myConsumerStream =
    factory.getKTable('favourite-color-input', toKv)

myConsumerStream.map(({ message }) => message).to('output-color-topic');

myConsumerStream.start();
