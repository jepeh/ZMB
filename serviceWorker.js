const ASSETS = [
	"Game.html",
	"index.html",
	"style.css",
	"App.js",
	"mainpage.css",
	"serviceWorker.js",
	"manifest.json",
	"app/script.js",
	"app/audio.js",
	"app/rewards.js",
	"app/utils.js",
	"app/bullets/bullet.js",
	"app/map/map.js",
	"app/modes/adventure.js",
	"app/modes/farm.js",
	"app/modes/rumblearena.js",
	"app/systems/particle.js",
	"characters/character.js",
	"controller/controller.js",
	"controller/joy.js",
	"profiles/profile.js",
	"skills/skills.js",
	"src/index.js",
	"src/jquery-3.6.0.js",
	"src/jquery.easypiechart.min.js",
	"src/OimoPhysics.js",
	"src/OP.js",
	"src/OrbitControls.js",
	"src/RoundedBoxGeometry.js",
	"src/three.js",
	"src/TextGeometry.js",
	"src/TweenMax.min.js",
	"src/Loader/FBXLoader.js",
	"src/Loader/GLTFLoader.js",
	"src/Loader/FontLoader.js",
	"src/Loader/OBJLoader.js",
	"src/Stats.js",
	"assets/characters/kiwi.obj",
	"assets/audio/bladeGun.wav",
	"assets/audio/bomb.mp3",
	"assets/audio/coin.wav",
	"assets/audio/color.wav",
	"assets/audio/die.wav",
	"assets/audio/eat.mp3",
	"assets/audio/energy.wav",
	"assets/audio/farmmode.mp3",
	"assets/audio/farmModeReward.wav",
	"assets/audio/gamemode.wav",
	"assets/audio/gameOver.wav",
	"assets/audio/gameWin.wav",
	"assets/audio/gift.wav",
	"assets/audio/gun.wav",
	"assets/audio/instantKill.wav",
	"assets/audio/laserGun.wav",
	"assets/audio/laserLightGun.wav",
	"assets/audio/lightningStrike.mp3",
	"assets/audio/mainMusic.mp3",
	"assets/audio/menu.wav",
	"assets/audio/EnemyBoss.mp3",
	"assets/audio/normalGun.wav",
	"assets/audio/pixelBullet.mp3",
	"assets/audio/selectInv.wav",
	"assets/audio/toggle.wav",
	"assets/audio/itemPreview.wav",
	"assets/gltf/box.gltf",
//	"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap",
	"assets/gltf/coin.gltf",
	"assets/images/atomoff.png",
	"assets/images/atomon.png",
	"assets/images/background.jpg",
	"assets/images/blockgamesblack.png",
	"assets/images/blockgameswhite.png",
	"assets/images/coin_reward.png",
	"assets/images/coin.png",
	"assets/images/energy.png",
	"assets/images/farming.png",
	"assets/images/lockmode.png",
	"assets/images/key.png",
	"assets/images/logo.png",
	"assets/images/logo2.png",
	"assets/images/icon.png",
	"assets/images/icon2.png",
	"assets/images/map.png",
	"assets/images/profile.jpg",
	"assets/images/rewards",
	"assets/images/skillArrow.png",
	"assets/images/ranks/legend1.png",
	"assets/images/ranks/legend2.png",
	"assets/images/ranks/legend3.png",
	"assets/images/ranks/master1.png",
	"assets/images/ranks/master2.png",
	"assets/images/ranks/master3.png",
	"assets/images/ranks/novice1.png",
	"assets/images/ranks/novice2.png",
	"assets/images/ranks/novice3.png",
	"assets/images/zombie.png",
	"assets/vid.jpg",
	"assets/vid2.jpg",
	"assets/noise.png",
	"assets/images/rewards/10coins.png",
	"assets/images/rewards/1coin.png",
	"assets/images/rewards/1energy.png",
	"assets/images/rewards/1key.png",
	"assets/images/rewards/5coins.png",
	"assets/images/rewards/atom.png",
	"assets/images/rewards/damage.png",
	"assets/images/rewards/hp.png",
	"assets/images/rewards/speed.png",
	"assets/images/textures/bladeBullet.png",
	"assets/images/textures/bladeHit.png",
	"assets/images/textures/field.png",
	"assets/images/textures/jelly.png",
	"assets/images/textures/gun.png",
	"assets/images/textures/gunrange.png",
	"assets/images/textures/halo.png",
	"assets/images/textures/heal.png",
	"assets/images/textures/IKrod.png",
	"assets/images/textures/instantKill.png",
	"assets/images/textures/jellyfishBullet.png",
	"assets/images/textures/laser.png",
	"assets/images/textures/laserAura.png",
	"assets/images/textures/laserBeam.png",
	"assets/images/textures/laserBullet.png",
	"assets/images/textures/laserlightBullet.png",
	"assets/images/textures/lasers.png",
	"assets/images/textures/lightning.png",
	"assets/images/textures/ninjabladeBullet.png",
	"assets/images/textures/phoenixfireBullet.png",
	"assets/images/textures/rod.png",
	"assets/images/textures/summonZombie.png",
	"assets/images/textures/particleTexture.png",
	"assets/images/textures/phoenixhit.png",
	"assets/images/textures/bladeTrail.png",
	"assets/images/textures/phoenixTrail.png",
	"assets/images/textures/phoenixTrail2.png"
	];

async function preCache() {
  console.log("caching...")
  var cache = await caches.open("ASSETS")
  console.log("cached")
  return cache.addAll(ASSETS)
}

self.addEventListener("install", (installEvent) => {
  console.log("installed, caching files")
  installEvent.waitUntil(preCache())
  self.skipWaiting()
});

self.addEventListener("active", e => {
  console.log("activated")
})

self.addEventListener('fetch', function(event) {
  console.log("fetching for " + event.request.url)
  event.respondWith(
    caches.match(event.request)
    .then(e => {
      if (e) {
        console.log("found in cache")
        return e
      }
      return fetch(event.request)
    })
    .catch(r =>{
      console.log("not in cache "+ event.request.url)
    })
  )
});