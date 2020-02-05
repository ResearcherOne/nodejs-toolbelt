var myArgs = process.argv.slice(2);

const apacheServer = myArgs[0];
const apachePort = myArgs[1];
const topicName = myArgs[2];

if(!apacheServer || !apachePort || !topicName) {
    console.log("Insufficent parameters, example usage: localhost 9092 topicName");
    process.exit();
}

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: apacheServer+':'+apachePort}),
    consumer = new Consumer(
        client,
        [
            { topic: topicName, partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

    consumer.on('message', function (message) {
        const topic = message.topic;
        const value = message.value;
        console.log('['+topic+'] '+value);
    });