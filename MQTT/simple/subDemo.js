const mqtt = require('mqtt');
var conn_opt = {
    host: 'localhost',
    port: 1883
};
var client = mqtt.connect(conn_opt);
client.on('connect', function () {
    console.log('connected');
    client.subscribe('hello');
});
client.on('message', function (topic, message) {
    console.log('got a message topic: ' + topic);
    console.log('payload: ' + message);
});