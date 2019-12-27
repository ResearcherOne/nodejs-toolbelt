var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 't', messages: 'hi' },
        { topic: 't', messages: ['hello', 'world'] }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});