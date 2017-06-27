const request = require('request');
var fs = require("fs");
var cpu3 = fs.readFileSync("/sys/class/thermal/thermal_zone3/temp").toString();
var payload = {
    api_key: "UY2IFSUPIC7F0JV8",
    field1: cpu3
};
var options = {
    uri: "https://api.thingspeak.com/update.json",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify(payload)
}
request.post(options, function (err, response, body) {
    if (err) {
        console.log("error", err);
    }
    console.log(response);
    // console.log("response body: " + body);
    console.log("status code: " + response.statusCode);

});