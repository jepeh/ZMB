import { GAME } from './app/script.js'
import * as Utils from './app/utils.js'
import * as Sounds from './app/audio.js'
//import * as T from './src/three.js'

$("#playbtn").on(' click ', () => {
  $("#cover, #GameMode").css("display", "grid")
  $("#playbtn").css("display", "none")
  Utils.playSound(Sounds.gameMode)
});


$("#GMCancel").on(' click ', () => {
  $("#cover, #GameMode").css("display", "none")
  $("#playbtn").css("display", "grid")

});

/*
// define a new console
var console = (function(oldCons) {
  return {
    log: function(text) {
      oldCons.log(text);
      $("#alert").css({
        display: "grid"
      })
      $("#alert").text(text)
    },
    info: function(text) {
      oldCons.info(text);
      // Your code
    },
    warn: function(text) {
      oldCons.warn(text);
      // Your code
    },
    error: function(text) {
      oldCons.error(text);
      // Your code
    }
  };
}(window.console));

//Then redefine the old console
window.console = console;*/