let game = document.getElementById("canvas").getContext("2d");

let dir;
let dirP2;
let imgPath1 = "../topdown-shooter/PNG/Survivor 1/survivor1_top.png"
let imgPath2 = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_top.png"
let zombiePath = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png";
let arrZombie = [];
let arrZombie2 = [];
let arrBullets = [];
let objZombie;
let objZombie2;
let objSoldier1;
let objSoldier2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function move(e) {
  var x = e.keyCode

  switch (x) {

    case 65:
      objSoldier1.img.src = "../topdown-shooter/PNG/Survivor 1/survivor1_left.png"
      if (objSoldier1.x <= 0) {
        objSoldier1.x += 0
      } else objSoldier1.x -= 20;
      dir = 'Esquerda';
      break;

    case 87:
      objSoldier1.img.src = "../topdown-shooter/PNG/Survivor 1/survivor1_top.png"
      dir = 'Cima';
      if (objSoldier1.y <= 0) {
        objSoldier1.y += 0
      } else objSoldier1.y -= 20;
      break;

    case 68:
      objSoldier1.img.src = "../topdown-shooter/PNG/Survivor 1/survivor1_rigth.png"
      if (objSoldier1.x >= 1250) {
        objSoldier1.x += 0
      } else objSoldier1.x += 20;
      dir = 'Direita';
      break;

    case 83:
      objSoldier1.img.src = "../topdown-shooter/PNG/Survivor 1/survivor1_down.png"
      if (objSoldier1.y + 37 >= 639) {
        objSoldier1.y += 0
      } else objSoldier1.y += 20
      dir = 'Baixo';
      break;

      /////////////////////////////////// ObjSoldier2

    case 37:
      objSoldier2.img.src = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_left.png"
      if (objSoldier2.x <= 0) {
        objSoldier2.x += 0
      } else objSoldier2.x -= 20;
      dirP2 = 'Esquerda';
      break;

    case 38:
      objSoldier2.img.src = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_top.png"
      if (objSoldier2.y <= 0) {
        objSoldier2.y += 0
      } else objSoldier2.y -= 20
      dirP2 = 'Cima';
      break;

    case 39:
      objSoldier2.img.src = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_right.png"
      dirP2 = 'Direita';
      if (objSoldier2.x >= 1250) {
        objSoldier2.x += 0
      } else objSoldier2.x += 20;
      break;

    case 40:
      objSoldier2.img.src = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_down.png"
      dirP2 = 'Baixo';
      if (objSoldier2.y + 37 >= 639) {
        objSoldier2.y += 0
      } else objSoldier2.y += 20
      break;

    case 32:
      const objBullet = new Bullet(dirBulletX(), dirBulletY(), dir)
      arrBullets.push(objBullet)
      break;

    case 191:
      const objBullet2 = new Bullet(dirBulletX2(), dirBulletY2(), dirP2);
      arrBullets.push(objBullet2);
      break;
  }
}

function dirBulletY2() {
  if (dirP2 === 'Cima') {
    return objSoldier2.y + 3
  }
  if (dirP2 === 'Esquerda') {
    return objSoldier2.y + 15
  }
  if (dirP2 === 'Baixo') {
    return objSoldier2.y + 35
  }
  if (dirP2 === 'Direita') {
    return objSoldier2.y + 30
  }
}

function dirBulletX2() {
  if (dirP2 === 'Cima') {
    return objSoldier2.x + 30
  }
  if (dirP2 === 'Esquerda') {
    return objSoldier2.x - 5
  }
  if (dirP2 === 'Baixo') {
    return objSoldier2.x + 8
  }
  if (dirP2 === 'Direita') {
    return objSoldier2.x + 30
  }
}

function dirBulletY() {
  if (dir === 'Cima') {
    return objSoldier1.y + 3
  }
  if (dir === 'Esquerda') {
    return objSoldier1.y + 15
  }
  if (dir === 'Baixo') {
    return objSoldier1.y + 35
  }
  if (dir === 'Direita') {
    return objSoldier1.y + 30
  }
}

function dirBulletX() {
  if (dir === 'Cima') {
    return objSoldier1.x + 30
  }
  if (dir === 'Esquerda') {
    return objSoldier1.x - 5
  }
  if (dir === 'Baixo') {
    return objSoldier1.x + 8
  }
  if (dir === 'Direita') {
    return objSoldier1.x + 30
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function Bullet(bx, by, dir) {
  this.bx = bx;
  this.by = by;
  this.dir = dir;
}

Bullet.prototype.draw = function () {
  game.strokeRect(this.bx, this.by, 2, 2)
}

function reDrawBullets() {

  arrBullets.forEach(function (bullet) {
    if (bullet.dir === 'Cima') {
      bullet.by -= 10;
    }
    if (bullet.dir === 'Baixo') {
      bullet.by += 10;
    }
    if (bullet.dir === 'Esquerda') {
      bullet.bx -= 10;
    }
    if (bullet.dir === 'Direita') {
      bullet.bx += 10;
    }
    bullet.draw();
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Zombie(zX, zY) {
  this.zX = zX;
  this.zY = zY;
  this.zombieImg = new Image();
  this.zombieImg.src = zombiePath;
}

Zombie.prototype.drawZombie = function () {
  game.drawImage(this.zombieImg, this.zX, this.zY, 40, 40)
}

function createZombie() {
  let zombieRandomY = Math.floor(Math.random() * (650 - -50 + 1)) + 0;

  function random() {
    let zombieRandomX = Math.floor(Math.random() * (-50 - -48)) - 48;
    if (zombieRandomX > -50) {
      return zombieRandomX + 1300
    } else return zombieRandomX;
  }

  if (frame % 10 === 0) {
    objZombie = new Zombie(random(), zombieRandomY)
    arrZombie.push(objZombie);
  }
}

function reDrawZombies() {
  for (let i = 0; i < arrZombie.length; i++) {
    arrZombie[i].drawZombie();
    arrZombie[i].moveZombie();
  }
}

Zombie.prototype.moveZombie = function () {

  let d1 = Math.sqrt(Math.pow((objSoldier1.x - objZombie.zX), 2) + Math.pow((objSoldier1.y - objZombie.zY), 2))

  let d2 = Math.sqrt(Math.pow((objSoldier2.x - objZombie.zX), 2) + Math.pow((objSoldier2.y - objZombie.zY), 2))
  console.log(d1, d2)

  if (d1 < d2) {
    if (this.zY < objSoldier1.y) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_down.png"
      this.zY += 2;
    }
    if (this.zX < objSoldier1.x) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_rigth.png"
      this.zX += 2;
    }
    if (this.zY > objSoldier1.y) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_top.png"
      this.zY -= 2;
    }
    if (this.zX > objSoldier1.x) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png"
      this.zX -= 2;
    }
  } else if (d1 > d2) {
    if (this.zY < objSoldier2.y) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_down.png"
      this.zY += 2;
    }
    if (this.zX < objSoldier2.x) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_rigth.png"
      this.zX += 2;
    }
    if (this.zY > objSoldier2.y) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_top.png"
      this.zY -= 2;
    }
    if (this.zX > objSoldier2.x) {
      this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png"
      this.zX -= 2;
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function Soldier(imgPath) {
  this.x = 600;
  this.y = 350;
  this.img = new Image();
  this.img.src = imgPath;
}

Soldier.prototype.draw = function () {
  game.drawImage(this.img, this.x, this.y, 40, 40)
}

function createSoldiers() {
  objSoldier1 = new Soldier(imgPath1);
  objSoldier2 = new Soldier(imgPath2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function collision() {
  arrBullets.forEach(function (bullet, i) {
    arrZombie.forEach(function (zombie, i) {
      if ((bullet.bx >= zombie.zX && bullet.bx <= zombie.zX + 40) && (bullet.by >= zombie.zY && bullet.by <= zombie.zY + 40)) {
        arrZombie.splice(i, 1)
        arrBullets.splice(i, 2)
      }
    })
  })
}

function playerCollision() {
  arrZombie.forEach(function (zombie) {
    if ((zombie.zX >= objSoldier1.x && zombie.zX <= objSoldier1.x + 38) && (zombie.zY >= objSoldier1.y && zombie.zY <= objSoldier1.y + 38) || (zombie.zX >= objSoldier2.x && zombie.zX <= objSoldier2.x + 38) && (zombie.zY >= objSoldier2.y && zombie.zY <= objSoldier2.y + 38)) {
      clearInterval(interval)
      $("#canvas").hide()
      $("h2").show()
    }
  })
}