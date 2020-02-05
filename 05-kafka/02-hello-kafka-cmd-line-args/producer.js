var myArgs = process.argv.slice(2);

const apacheServer = myArgs[0];
const apachePort = myArgs[1];
const topicName = myArgs[2];

if(!apacheServer || !apachePort || !topicName) {
    console.log("Insufficent parameters, example usage: localhost 9092 topicName");
    process.exit();
}

var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.KafkaClient({kafkaHost: apacheServer+':'+apachePort}),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: topicName, messages: 'hi' },
        { topic: topicName, messages: ['hello', 'world'] }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
        process.exit();
    });
});