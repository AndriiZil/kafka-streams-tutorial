# Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# Start Kafka
bin/kafka-server-start.sh config/server.properties

# Create topics
bin/kafka-topics.sh --create --topic streams-plaintext-input --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1

bin/kafka-topics.sh --create --topic streams-wordcount-output --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1

# List topics
bin/kafka-topics.sh --bootstrap-server localhost:9092 --list

# Start producer
bin/kafka-console-producer.sh --topic streams-plaintext-input --bootstrap-server localhost:9092

# enter
kafka streams udemy
kafka data processing
kafka streams course
# exit

# Start producer
bin/kafka-console-consumer.sh --topic streams-plaintext-input --from-beginning --bootstrap-server localhost:9092

# Start a consumer on the output topic
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 \
    --topic streams-wordcount-output \
    --from-beginning \
    --formatter kafka.tools.DefaultMessageFormatter \
    --property print.key=true \
    --property print.value=true \
    --property key.deserializer=org.apache.kafka.common.serialization.StringDeserializer \
    --property value.deserializer=org.apache.kafka.common.serialization.LongDeserializer

# Start the streams application
bin/kafka-run-class.sh org.apache.kafka.streams.examples.wordcount.WordCountDemo
