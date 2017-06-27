const mqtt = require('mqtt');
var conn_opt = {
    host: 'localhost',
    port: 1883,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    clientId: 'pubdemo1234',
    will: {
        topic: 'killed',
        payload: 'got terminated'
    }
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