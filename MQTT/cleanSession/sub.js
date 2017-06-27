const mqtt = require('mqtt');

var conn_opt = {
    host: 'localhost',
    port: 1883,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    clientId: 'pubdemo1234',

};
var client = mqtt.connect(conn_opt);
client.on('connect', function () {
    timer1 = setInterval(function () {
        console.log('connected');
    }, 1000);

    //client.subscribe('hello');
});
setTimeout(function () {
    clearInterval(timer1);
    client.end();
    client.on('connect', function () {
        //timer2 = setInterval(function () {
        console.log('re-connected');
        //}, 1000);
    });
}, 2000);



// client.on('message', function (topic, message) {
//     console.log('got a message topic: ' + topic);
//     console.log('payload: ' + message);
// });