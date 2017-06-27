const request = require('request');
var date = new Date().toISOString();
var payload = {
    senseorType: "DHT11",
    team: {
        Member1: "Uma",
        Menber2: "Sanyam"
    },
    dataTemplate: {
        temp: "integer",
        humidity: "integer"
    },
    createdAT: date,
    data: {
        temp: 15,
        humidity: 20
    },
    history: ""
};
var options = {
    uri: "https://100.0.0.10:3000/devices/Register",
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify(payload)
}
request.post(options, function (err, response, body) {
    if (err) {
        console.log("error", err);
    }
    //console.log(response);
    // console.log("response body: " + body);
    //  console.log("status code: " + response.statusCode);

});