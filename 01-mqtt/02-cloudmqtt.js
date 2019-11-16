var mqtt = require('mqtt')
var client  = mqtt.connect({host: 'tailor.cloudmqtt.com', port:16988, username: "vlxmgxzr", password: "oG9O1HjiF09J"})
 
client.on('connect', function () {
  client.subscribe('telepresence-control', function (err) {
    if (!err) {
      client.publish('telepresence-control', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
