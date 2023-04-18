# Kafka Streams Tutorial

1. Download Kafka
2. Unpack kafka with `tar -zxvf kafka_2.13-3.4.0.tgz` command
3. All steps from file `01/intro.sh`

# KStreams
1. All inserts
2. Unbounded
3. Similar to logs

# KTables
1. All upserts on not null values
2. Deletes on null values
3. Similar to a table
4. Parallel with log compacted topics

# When to use KStream vs KTable?
1. `KStream` reading from a topic that's not compacted
2. `KTable` reading from a topic that's log-compacted (aggregations)
3. `KStream` if new data is partial information / transactional
4. `KTable` more if you need a structure that's like a `database table`, where every update is self sufficient
   (total bank balance)

# KStream & KTable Stateless vs Stateful Operations
1. `Stateless` means that the result of the a transformation only depends on the data-point you process
- Example `multiply value by 2` operation is stateless because it doesn't need memory of the past to be achieved
- 1 => 2
- 300 => 600
2. `Stateful` means that the result of the transformation also depends on a external information - the state
- Count operation is stateful because your app needs to know what happened since it started running in order
to know the computation result
- hello => 1
- hello => 2
