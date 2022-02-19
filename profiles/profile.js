let Profile = {
  level: 1,
  heroName: "cube",
  heroType: "default",
  coins: 100,
  bombReload: 3,
  velocity: 15,
  rank: "noob",
  maxHP: 100,
  bulletType: "jellyfishBullet",
  bombDamage: 20,
  energy: 10,
  mapRadius: 150,
  atomBombRadius: 20,
  atomLevel: 100,
  gunRange: 20,
  countdownMin: 5,
  keys: 0,
  skills: [{
      // Special Skill, Skill 1
      name: "forceField",
      damage: 3,
      img: "assets/images/textures/field.png",
      type: "special",
      cooldown: 10
	}, {
      // Static Skill, Skill 2
      name: "instantKill",
      damage: 0.8, // scaling down targets to 80%
      img: "assets/images/textures/gun.png",
      type: "static",
      cooldown: 10
	},
    {
      // Dynamic Skill, Skill 3
      name: "laserBeam",
      damage: 0.8, // scaling down targets to 80%
      img: "assets/images/coin.png",
      type: "dynamic",
      cooldown: 10
	}],
  Heroes: [
    {
      name: "cube",
      heroClass: "default",
      premium: false,
      unlockable: false
		}
		],

  // FB Data Functions
  FB: {
    update: function() {},
    get: function() {},
    delete: function() {}
  },
  bulletDamage: function(type) {
    var g;
    switch (type) {
      case "normalBullet":
        g = .1
        break;
      case "bladeBullet":
        g = .2
        break;
      case "laserBullet":
        g = .25
        break;
      case "laserlightBullet":
        g = .3
        break;
      case "phoenixfireBullet":
        g = .35
        break;
      case "jellyfishBullet":
        g = .4
        break;
      case "lasertubeBullet":
        g = .45
        break;
      case "pixelBullet":
        g = .5
        break;
      case "ninjabladeBullet":
        g = .55
        break;
    }
    return g
  },
  items: [],
  bullets: [
    {
      name: "normalBullet",
      description: "",
      stats: {
        damage: "+10%",
        bulletSpeed: 250
      }
	},
    {
      name: "laserBullet",
      description: "",
      stats: {
        damage: "+25%",
        bulletSpeed: 220
      }
	},
    {
      name: "bladeBullet",
      description: "",
      stats: {
        damage: "+20%",
        bulletSpeed: 210
      }
	},
    {
      name: "laserlightBullet",
      description: "",
      stats: {
        damage: "+30%",
        bulletSpeed: 200
      }
	},
    {
      name: "phoenixfireBullet",
      description: "",
      stats: {
        damage: "+35%",
        bulletSpeed: 190
      }
	},
    {
      name: "jellyfishBullet",
      description: "",
      stats: {
        damage: "+40%",
        bulletSpeed: 180
      }
	},
    {
      name: "lasertubeBullet",
      description: "",
      stats: {
        damage: "+45%",
        bulletSpeed: 170
      }
	},
    {
      name: "pixelBullet",
      description: "",
      stats: {
        damage: "+50%",
        bulletSpeed: 160
      }
	},
    {
      name: "ninjabladeBullet",
      description: "",
      stats: {
        damage: "+55%",
        bulletSpeed: 150
      }
	},

    {

	}],
  skins: []

}

let Levels = {
  levels: []
}

let Sounds = {
  sound: false,
  music: false
}

let User = {
  name: null,
  id: null,
  locale: null,
  image: new Image(),
  platform: null
}



export { Profile, Levels, Sounds, User }