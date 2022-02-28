import * as three from '/src/three.js'
var TL = new three.TextureLoader()

var Map = {
  bladeHit: TL.load("assets/images/textures/bladeHit.png"),
  phoenixHit: TL.load("assets/images/textures/phoenixhit.png"),
  jelly: TL.load("assets/images/textures/jelly.png"),
  bladeTrail: TL.load("assets/images/textures/bladeTrail.png"),
  phoenixTrail: TL.load("assets/images/textures/phoenixTrail.png"),
  phoenixTrailFlower: TL.load("assets/images/textures/phoenixTrail2.png")
  
}

export { Map }