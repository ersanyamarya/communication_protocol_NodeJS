const mqtt = require('mqtt');
var conn_opt = {
    host: 'localhost',
    port: 1883
};
var times = 1;
var timer;
var client = mqtt.connect(conn_opt);
client.on('connect', function () {
    timer = setInterval(function () {
        console.log('published');
        var msg = ('message no: ' + times);
        client.publish('hello', msg);
        times++;
    }, 1000);
});
setTimeout(function () {
    clearInterval(timer);
    client.end();
}, 10000);