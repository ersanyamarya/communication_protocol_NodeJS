const mqtt = require('mqtt');
var fs = require("fs");
var conn_opt = {
    host: 'localhost',
    port: 1883
};
var times = 1;
var timer;
var client = mqtt.connect(conn_opt);
client.on('connect', function () {

    timer = setInterval(function () {
        var datetime = new Date();
        var cpu0 = fs.readFileSync("/sys/class/thermal/thermal_zone0/temp");
        var cpu1 = fs.readFileSync("/sys/class/thermal/thermal_zone1/temp");
        var cpu2 = fs.readFileSync("/sys/class/thermal/thermal_zone2/temp");
        var cpu3 = fs.readFileSync("/sys/class/thermal/thermal_zone3/temp");
        var payload = {
            hardwareId: "SanyamTest",
            type: "DeviceMeasurements",
            request: {
                measurements: {
                    CPU0: cpu0.toString(),
                    CPU1: cpu1.toString(),
                    CPU2: cpu2.toString(),
                    CPU3: cpu3.toString()
                },
                updateState: true,
                eventDate: datetime
            }
        }
    var str = JSON.stringify(payload);

        console.log('published');
        client.publish('SiteWhere/input/json', str);
        times++;
    }, 1000);
});
setTimeout(function () {
    clearInterval(timer);
    client.end();
}, 10000);