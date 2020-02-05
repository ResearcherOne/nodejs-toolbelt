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
    offset = new kafka.Offset(client);
    
    offset.fetchLatestOffsets([topicName], function (error, offsets) {
        if (error)
            return handleError(error);
        console.log(offsets[topicName]);
        
        const partition = '0';
        const latestOffset = offsets[topicName][partition];

        var consumer = new Consumer(
            client,
            [
                { topic: topicName, partition: 0 }
            ],
            {
                autoCommit: false,
                fromOffset: true,
            }
        );
        consumer.setOffset(topicName, partition, latestOffset);
    
        consumer.on('message', function (message) {
            const topic = message.topic;
            const value = message.value;
            console.log('['+topic+'] '+value);
        });
    });