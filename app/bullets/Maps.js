import * as three from '/src/three.js'
var TL = new three.TextureLoader()

var Map = {
  bladeHit: TL.load("assets/images/textures/bladeHit.png"),
phoenixHit: TL.load("assets/images/textures/phoenixhit.png"),
jelly: TL.load("assets/images/textures/jelly.png")
}

export {Map}