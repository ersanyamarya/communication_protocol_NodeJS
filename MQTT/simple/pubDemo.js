const mqtt = require('mqtt');
var conn_opt = {
    host: 'localhost',
    port: 1883
};
var client = mqtt.connect(conn_opt);

client.on('connect', function () {
    client.publish('hello', 'my second messege', function () {
        client.end();
    });
});