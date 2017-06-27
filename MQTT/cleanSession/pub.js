const mqtt = require('mqtt');
var conn_opt = {
    host: 'localhost',
    port: 1883,
   };
var client = mqtt.connect(conn_opt);

client.on('connect', function () {
    client.publish('hello', 'with all options', function () {
        client.end();
    });
});