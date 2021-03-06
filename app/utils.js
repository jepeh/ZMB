import { Profile, Sounds } from "/profiles/profile.js"
import * as sounds from './audio.js'
import * as Three from '/src/three.js'
import { GAME } from './script.js'
import { FARM } from './modes/farm.js'
import { TextGeometry } from "/src/TextGeometry.js"

$("#music").on('click', function() {
  Sounds.music ? $("#music div").css({ transform: "translateX(-63%)", backgroundColor: "rgba(255,255,255,.7)" }) : $("#music div").css({ transform: "translateX(63%)", backgroundColor: "rgba(0,0,0,.7)" });
  !Sounds.music ? $("#music").css({ backgroundColor: "rgba(255,255,255,.8)" }) : $("#music").css({ backgroundColor: "rgba(0,0,0,.4)" })
  Sounds.music ? Sounds.music = false : Sounds.music = true

  playSound(sounds.toggle)
})

$("#sound").on('click', function() {
  Sounds.sound ? $("#sound div").css({ transform: "translateX(-63%)", backgroundColor: "rgba(255,255,255,.7)" }) : $("#sound div").css({ transform: "translateX(63%)", backgroundColor: "rgba(0,0,0,.7)" });
  !Sounds.sound ? $("#sound").css({ backgroundColor: "rgba(255,255,255,.8)" }) : $("#sound").css({ backgroundColor: "rgba(0,0,0,.4)" })
  Sounds.sound ? Sounds.sound = false : Sounds.sound = true

  playSound(sounds.toggle)
})

$(".navs").on("click", e => {
  var id = e.currentTarget.attributes.id.value
  sounds.mainMusic.volume = .05

  switch (id) {
    case "shop":
      // shop()

      break;
    case "inventory":
      inventory()

      break;
    case "settings":
      //settings()

      break;
    case "help":
      // help()

      break;
  }

  return;
})

function inventory() {

  $("#menu").css("display", "grid")

  playSound(sounds.setting)

  var inv = `<div id="inventory-wrapper">
				<div class="inventory" id="inv-list">
					<div class="inv-lists" usable="true" id="items" onClick="selectINV(this)">
						<p>ITEMS</p>
					</div>
					<div class="inv-lists" id="skills" onClick="selectINV(this)">
						<p>SKILLS</p>
					</div>
					<div class="inv-lists" id="skins" onClick="selectINV(this)">
						<p>SKINS</p>
					</div>
					<div class="inv-lists" id="bullets" onClick="selectINV(this)">
						<p>BULLETS</p>
					</div>
				</div>
				<div class="inventory" id="inv-body">
				
				</div>
			</div>`

  $("#menu-container").append(inv)

  for (var i = 0; i < Profile.items.length; i++) {
    var items = ``;

    $("#inv-body").append(items)
  }

}

//*******************************************
// MENU 
//*******************************************

$("#menu-close").on('click', function() {

  sounds.mainMusic.volume = .3
  $("#menu").css('display', "none")
  $("#menu-container").html("")

  playSound(sounds.toggle)

})

/**************************************************
SELECT INVENTORY
**************************************************/

window.selectINV = function(e) {

  var elem = document.getElementsByClassName("inv-lists")

  for (var i = 0; i < elem.length; i++) {
    if (elem[i].id === e.id) {
      var itemType = elem[i].id

      elem[i].style.background = "linear-gradient(to right, #425A5A00, #0FBAD599, #425A5A00)"


      // reload inventory
      $("#inv-body").html("")

      for (var o = 0; o < Profile[elem[i].id].length; o++) {

        var bulletInfo = Profile[elem[i].id][o]
        var color = bulletInfo.color
        var name = bulletInfo.name
        var bulletType = bulletInfo.typeColor
        var img = bulletInfo.img
        var equip = bulletInfo.name === Profile.bulletType ? "Equipped" : "Equip"


        let div = `<div class="Items" id="${name}" onClick="handlePreview(this, ${itemType})">
		        <div style="border-top: 1px solid ${color};
  border-bottom: 3.5px solid ${color}; box-shadow: 0px 0px 10px 2px rgba(0,0,0,.4), -1px -0px 15px 2px ${color} inset;">
		          <img id="itemimg${o}" src="${img}"/>
		        </div>
		      <div style="background: linear-gradient(to right, ${color}, transparent 85%); box-shadow: 0px 0px 5px 1px ${color}">
		        <p>${name}</p>
		          <div>
		          <div style="border: 1px solid ${bulletType}"> <p>${equip}</p></div>
		          <div class="buls" style="box-shadow: 0px 0px 10px 1px ${color}" id="bul1"></div>
		          <div class="buls" style="box-shadow: 0px 0px 10px 1px ${color}" id="bul2"></div>
		          <div class="buls" style="box-shadow: 0px 0px 10px 1px ${color}" id="bul3"></div>
		          <div class="buls" style="box-shadow: 0px 0px 10px 1px ${color}" id="bul4"></div>
		          <div class="buls" style="box-shadow: 0px 0px 10px 1px ${color}" id="bul5"></div>
		          </div>
		        </div>
			</div>`
        $("#inv-body").append(div)
      }

      playSound(sounds.selectINV)

    } else {
      elem[i].style.background = "transparent"
    }
  }
}


window.handlePreview = function(e, etype) {


  var bullet = Profile.bullets.filter(r => {
    return r.name === e.id
  })[0]

  var type = etype.id

  playSound(sounds.itemPreview)

  switch (type) {
    case "bullets":
      bulletsPreview(bullet)
      break;
    case "items":
      itemsPreview()
      break;
    case "skins":
      skinsPreview()
      break;
    case "skills":
      skillsPreview()
      break;
  }
  return;
}

function bulletsPreview(bullet) {

  $("#cover").css("display", "block")

  var itemPrev = `<div class="itempreview" id="bulletItemPreview">
    <div class="itp" id="bulletItemInfo">
    <img src="${bullet.img}"/>
    <div>
    <p id="bulletName"> ${bullet.name}</p>
    <p></p>
   <p></p>   
   <p></p>   
   <p></p>       
    </div>
    </div>
    <div class="itp" id="useOptions">
      <div class="options"><p>use</p></div>
      <div class="options" id="cancelBullet"><p>cancel</p></div>
    </div>
  </div>`

  $("body").append(itemPrev)



  $(".options").on("click", e => {

    if (e.currentTarget.id === "cancelBullet") {
      $(".itempreview").remove()
      $("#cover").css("display", "none")
    }
    // Use Bullet Type
    else {
      Profile.bulletType = bullet.name
      selectINV(document.getElementById("bullets"))
      $("#cover").css("display", "none")
      $(".itempreview").remove()

      // Update hero's bullet
      window.hero.bombDamage = Profile.bombDamage + Profile.bombDamage * Profile.bulletDamage(Profile.bulletType)
      window.hero.bulletSpeed = Profile.bullets.filter(e => { return e.name === Profile.bulletType })[0].stats.bulletSpeed
      window.hero.mapBullet = window.TextureLoader.load(`assets/images/textures/${Profile.bulletType}.png`)

    }
  })



}

window.closePreview = function() {
  $(".itempreview").remove()
  $("#cover, #invuse").css("display", "none")
}

$("#alert").on('click', function() {
  $("#alert").css("display", "none")
})


function isEnergy() {
  if (Profile.energy > 1) return true;
  else return false
}

function notEnergy() {
  $("#playbtn, #alert").css("display", "grid")
  $("#cover, #GameMode").css("display", "none")
  playSound(sounds.energy)

}

function playSound(sound) {

  if (Sounds.sound) {
    sound.currentTime > 0 ? sound.currentTime = 0 : false
    var ss = sound.play()
    if (ss !== undefined) ss.then(() => {})
      .catch((e) => {})
  }
}

function playMusic(sound) {

  if (Sounds.music) {
    sound.currentTime > 0 ? sound.currentTime = 0 : false
    var ss = sound.play()
    if (ss !== undefined) ss.then(() => {})
      .catch((e) => { console.warn(e) })
  }
}

function stopSound(s) {
  s.pause()
}

var Atom = function(scene, p, Arr) {
  this.scene = scene
  this.p = p
  this.Arr = Arr
  this.group = new Three.Group()

  this.mesh = new Three.Mesh(new Three.SphereGeometry(.8), new Three.MeshNormalMaterial())
  //	this.mesh.material.flatShading = true
  var self = this
  self.group.add(this.mesh)

  var e1 = new Three.Mesh(new Three.OctahedronGeometry(.2, 2), new Three.MeshNormalMaterial())
  e1.position.set(.5, .9, .9)
  e1.material.flatShading = true

  var e2 = new Three.Mesh(new Three.OctahedronGeometry(.2, 2), new Three.MeshNormalMaterial())
  e2.position.set(.7, -.5, -.9)
  e2.material.flatShading = true

  var e3 = new Three.Mesh(new Three.OctahedronGeometry(.2, 2), new Three.MeshNormalMaterial())
  e3.position.set(-.9, -.9, .9)
  e3.material.flatShading = true

  var e4 = new Three.Mesh(new Three.OctahedronGeometry(.2, 2), new Three.MeshNormalMaterial())
  e4.position.set(-1, -1, -1)
  e4.material.flatShading = true
  var ex = new Three.Mesh(new Three.SphereGeometry(2, 13, 6), new Three.MeshNormalMaterial())
  ex.material.transparent = true
  ex.material.opacity = .2
  ex.material.flatShading = true
  self.group.add(ex)

  self.group.add(e1, e2, e3, e4)
  self.group.position.set(hero.mesh.position.x, hero.mesh.position.y, hero.mesh.position.z)

  self.show = function() {
    return self.group
  }

  this.update = function(e) {
    this.group.rotation.x = e * 6
    this.group.rotation.y = e * 6
    //	this.group.rotation.z += e*6
  }

  this.explode = (function() {
    var h = 0
    var enKill = [];

    var bombXPos = self.group.position.x + Profile.atomBombRadius,
      bombXNeg = self.group.position.x - Profile.atomBombRadius,
      bombZPos = self.group.position.z + Profile.atomBombRadius,
      bombZNeg = self.group.position.z - Profile.atomBombRadius;

    setTimeout(() => {

      var t = setInterval(() => {
        if (h >= 100) {
          h = 0;
          clearInterval(t)
          var hh = 0;
          var tt = setInterval(() => {
            if (hh >= 100) {
              hh = 0
              var uniq = enKill.reduce(function(a, b) {
                if (a.indexOf(b) < 0) a.push(b);
                return a;
              }, []);

              var eneKilling = []

              for (var en = 0; en < uniq.length; en++) {

                if (!window.bossGame) {

                  for (var u = 0; u < window.enemies.length; u++) {
                    if (window.enemies[u].mesh.name === uniq[en]) {
                      eneKilling.push(enemies[u])
                    }
                  }
                } else {

                  for (var uu = 0; uu < window.babyZombies.length; uu++) {
                    if (babyZombies[uu].mesh.name === uniq[en]) {
                      eneKilling.push(babyZombies[uu])

                    }
                  }
                }


              }

              var pos = self.group.position
              for (var ene = 0; ene < eneKilling.length; ene++) {

                window.killed = window.killed + 1

                if (window.bossGame) {
                  eneKilling[ene].mesh.children.forEach(e => {
                    e.geometry.dispose()
                    e.material.dispose()
                  })
                } else {
                  eneKilling[ene].mesh.geometry.dispose()
                  eneKilling[ene].mesh.material.dispose()

                }
                SCENE.remove(eneKilling[ene].mesh)

                if (window.bossGame) {

                  for (var ejj = 0; ejj < window.babyZombies.length; ejj++) {
                    if (babyZombies[ejj].mesh.name === eneKilling[ene].mesh.name) {
                      babyZombies[ejj].die()
                    }
                  }
                } else {

                  for (var ejj = 0; ejj < window.enemies.length; ejj++) {
                    if (enemies[ejj].mesh.name === eneKilling[ene].mesh.name) {
                      enemies[ejj].die()
                    }
                  }

                  for (var ehh = 0; ehh < window.enemyList.length; ehh++) {
                    if (window.enemyList.name === eneKilling[ene].mesh.name) {
                      window.enemyList.splice(ehh, 1)
                    }
                  }
                }



                $("#zombiecount p").html("Zombies x" + window.enemies.length)
                if (!window.bossGame && window.enemies.length <= 0) {
                  FARM.EnemyBoss()
                }
              }




              window.atom.mesh.geometry.dispose()
              window.atom.mesh.material.dispose()
              self.scene.remove(self.group)
              window.atom = undefined
              window.a = undefined
              window.atomBomb = false
              clearInterval(tt)
              Profile.atomLevel = 0
              $('.chart').data('easyPieChart').update(0);
              bmb = true


              $(".atomimgon").attr("src", "assets/images/atomoff.png")
              $(".atomimgon").removeClass().addClass("atomimgoff")
              /*enKill.length = 0
              eneKilling.length = 0
              uniq.length = 0*/

            } else {
              hh = hh + 1

              ex.scale.x = ex.scale.x - .1
              ex.scale.y = ex.scale.y - .1
              ex.scale.z = ex.scale.z - .1

              if (self.Arr.length > 0) {

                for (var en = 0; en < self.Arr.length; en++) {
                  var eX = self.Arr[en].mesh.position.x,
                    eZ = self.Arr[en].mesh.position.z;

                  if (eX > bombXNeg && bombXPos > eX && eZ > bombZNeg && bombZPos > eZ) {
                    self.Arr[en].x = self.group.position.x - self.Arr[en].mesh.position.x + 1
                    self.Arr[en].z = self.group.position.z - self.Arr[en].mesh.position.z + 1

                    self.Arr[en].mesh.scale.x = self.Arr[en].mesh.scale.x - .01
                    self.Arr[en].mesh.scale.y = self.Arr[en].mesh.scale.y - .01
                    self.Arr[en].mesh.scale.z = self.Arr[en].mesh.scale.z - .01


                    enKill.push(self.Arr[en].mesh.name)

                  }

                }

              }

            }
          }, 10)
        }
        else {
          h = h + 1

          ex.scale.x = ex.scale.x + .1
          ex.scale.y = ex.scale.y + .1
          ex.scale.z = ex.scale.z + .1
        }
      }, 10)

      clearTimeout()
    }, 2500)

    return;
  })()
}


function spawnBox(p) {
  var pos = {
    x: window.character.position.x,
    z: window.character.position.z
  }

  var ranX = Math.floor(Math.random() * (30 - (-30)) + (-30))
  var ranZ = Math.floor(Math.random() * (30 - (-30)) + (-30))

  pos.x = pos.x + ranX
  pos.z = pos.z + ranZ

  window.ModelLoader.load("assets/gltf/box.gltf", e => {

    var box = e.scene.children[0]
    box.children.shift()
    box.position.set(pos.x, 4, pos.z)
    box.scale.set(0.05, .05, .05)

    for (var i = 0; i < box.children.length; i++) {
      if (box.children[i].type === "Mesh") {
        box.children[i].material = new Three.MeshToonMaterial()
        var c = box.children[i].name

        if (c.length > 7) {
          c = c.split("_")[0]
        }
        box.children[i].material.color.set(c)
      }
    }

    box.children[box.children.length - 1].material.color.set(window.colors[Math.floor(Math.random() * (6 - 1) + 1)])

    window.SCENE.add(box)

    var scale = { x: .2, y: .2, z: .2 }

    TweenMax.to(box.scale, .4, { x: scale.x, y: scale.y, z: scale.z })


    window.mysteryboxes.push(box)

  })
  return;
}



export { playMusic, stopSound, isEnergy, notEnergy, playSound, Atom, spawnBox }