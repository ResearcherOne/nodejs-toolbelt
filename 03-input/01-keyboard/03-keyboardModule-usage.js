const keyboardModule = require('./KeyboardModule.js')


keyboardModule.setKeydownEventHandler(function(keyDescription){
    console.log("Keydown: "+keyDescription);
});

keyboardModule.setKeyupEventHandler(function(keyDescription){
    console.log("Keyup: "+keyDescription);
});