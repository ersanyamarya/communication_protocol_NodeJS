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
    client.publish('hello', 'with all options', function () {
        client.end();
    });
});