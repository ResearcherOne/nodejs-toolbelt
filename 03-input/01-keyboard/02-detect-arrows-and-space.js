'use strict';

const ioHook = require('iohook');

const keyCodes = {
  UP: 57416,
  DOWN: 57424,
  RIGHT: 57421,
  LEFT: 57419,

  SPACE: 57
}

ioHook.on('keydown', event => {
  if(event.keycode == keyCodes.UP){
    console.log('Keydown: UP')
  } else if (event.keycode == keyCodes.DOWN){
    console.log('Keydown: DOWN')
  } else if (event.keycode == keyCodes.RIGHT){
    console.log('Keydown: RIGHT')
  } else if (event.keycode == keyCodes.LEFT){
    console.log('Keydown: LEFT')
  } else if (event.keycode == keyCodes.SPACE){
    console.log('Keydown: SPACE')
  } 
});

ioHook.on('keyup', event => {
    if(event.keycode == keyCodes.UP){
      console.log('Keyup: UP')
    } else if (event.keycode == keyCodes.DOWN){
      console.log('Keyup: DOWN')
    } else if (event.keycode == keyCodes.RIGHT){
      console.log('Keyup: RIGHT')
    } else if (event.keycode == keyCodes.LEFT){
      console.log('Keyup: LEFT')
    } else if (event.keycode == keyCodes.SPACE){
      console.log('Keyup: SPACE')
    } 
  });

// Register and start hook
ioHook.start();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);