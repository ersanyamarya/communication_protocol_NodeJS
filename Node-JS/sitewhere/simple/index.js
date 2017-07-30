var myUART = require('./uart.js');
var myLED = {
  state: true,
  set: function() {
    this.state = true;
  },
  reset: function() {
    this.state = false;
  },
  flip: function() {
    if (this.state == true) {
      this.state = false;
    } else {
      this.state = true;
    }
  },
  check: function() {
    return this.state;
  }
}

//exporting the objects 
module.exports.myLed = myLED;
module.exports.myUart= myUART;
