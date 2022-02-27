let Profile = {
  level: 1,
  heroName: "cube",
  heroType: "default",
  coins: 100,
  bombReload: 3,
  velocity: 15,
  rank: "noob",
  maxHP: 100,
  bulletType: "bladeBullet",
  bombDamage: 20,
  energy: 10,
  mapRadius: 70,
  atomBombRadius: 20,
  atomLevel: 0,
  gunRange: 20,
  countdownMin: 5,
  keys: 0,
  skills: [{
      // Special Skill, Skill 1
      name: "forceField",
      damage: 3,
      img: "assets/images/textures/field.png",
      type: "special",
      cooldown: 350
	}, {
      // Static Skill, Skill 2
      name: "instantKill",
      damage: 0.8, // scaling down targets to 80%
      img: "assets/images/textures/gun.png",
      type: "static",
      cooldown: 390
	},
    {
      // Dynamic Skill, Skill 3
      name: "laserBeam",
      damage: 0.8, // scaling down targets to 80%
      img: "assets/images/coin.png",
      type: "dynamic",
      cooldown: 400
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
      color: "#0EDEFFFC",
      description: "",
      type: "classic",
      typeColor: "#21FFBB",
      img: "assets/images/coin.png",
      stats: {
        damage: "+10%",
        bulletSpeed: 250
      }
	},
    {
      name: "laserBullet",
      color: "blue",
      description: "",
      type: "classic",
      typeColor: "#21FFBB",
      stats: {
        damage: "+25%",
        bulletSpeed: 220
      }
	},
    {
      name: "bladeBullet",
      color: "#BAFCFF",
      type: "classic",
      typeColor: "#21FFBB",
      description: "",
      stats: {
        damage: "+20%",
        bulletSpeed: 210
      }
	},
    {
      name: "laserlightBullet",
      color: "#00FF7F",
      type: "modern",
      typeColor: "#21F2FF",
      description: "",
      stats: {
        damage: "+30%",
        bulletSpeed: 200
      }
	},
    {
      name: "phoenixfireBullet",
      color: "#FF6E00",
      type: "modern",
      typeColor: "#21F2FF",
      description: "",
      stats: {
        damage: "+35%",
        bulletSpeed: 190
      }
	},
    {
      name: "jellyfishBullet",
      color: "#7605FF",
      type: "modern",
      typeColor: "#21F2FF",
      description: "",
      stats: {
        damage: "+40%",
        bulletSpeed: 180
      }
	},
    {
      name: "lasertubeBullet",
      color: "#E1B9FF",
      description: "",
      type: "ancient",
      typeColor: "#FF1414",
      stats: {
        damage: "+45%",
        bulletSpeed: 170
      }
	},
    {
      name: "pixelBullet",
      color: "#FE5EFF",
      description: "",
      type: "ancient",
      typeColor: "#FF1414",
      stats: {
        damage: "+50%",
        bulletSpeed: 160
      }
	},
    {
      name: "ninjabladeBullet",
      color: "#FF0000",
      description: "",
      type: "ancient",
      typeColor: "#FF1414",
      stats: {
        damage: "+55%",
        bulletSpeed: 150
      }
	},],
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