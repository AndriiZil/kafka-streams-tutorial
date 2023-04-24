'use strict';

const { KafkaStreams } = require('kafka-streams');

const config = require('../options.json');

const factory = new KafkaStreams(config);

const myConsumerStream = factory.getKStream('favourite-color-input');
// myConsumerStream.forEach(message => console.log(message.value.toString()));
myConsumerStream.map(({ key, value }) => {
    return {
        key: key.toString(),
        message: value.toString(),
    };
}).filter(({key, message}) => {
    console.log('FILTER', { key, message });
    return key === 'Ted';
}).forEach(console.log).then(console.log);

(async () => {
    try {
        await myConsumerStream.start();
    } catch (err) {
        console.error(err);
    }
})();

