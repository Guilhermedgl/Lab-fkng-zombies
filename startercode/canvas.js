let game = document.getElementById("canvas").getContext("2d");

let dir;
let dirP2;
let imgPath1 = "../topdown-shooter/PNG/Survivor 1/survivor1_top.png"
let imgPath2 = "../topdown-shooter/PNG/Survivor 1/manOld_silencer_top.png"
let zombiePath = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png";
let arrZombie = [];
let arrZombie2 = [];
let arrBullets = [];
let arrBullets2 = [];
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
      const objBullet = new Bullet(objSoldier1.x, objSoldier1.y, dir)
      arrBullets.push(objBullet)
      break;

    case 191:
      const objBullet2 = new Bullet(objSoldier2.x, objSoldier2.y, dirP2);
      arrBullets.push(objBullet2);
      console.log(arrBullets2, dirP2)
      break;

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

// function reDrawBullets2() {

//   arrBullets2.forEach(function (bullet2) {
//     if (bullet2.dirP2 === 'Cima') {
//       bullet2.by -= 10;
//     }
//     if (bullet2.dirP2 === 'Baixo') {
//       bullet2.by += 10;
//     }
//     if (bullet2.dirP2 === 'Esquerda') {
//       bullet2.bx -= 10;
//     }
//     if (bullet2.dirP2 === 'Direita') {
//       bullet2.bx += 10;
//     } 
//     bullet2.draw();
//   });
// }

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

  if (frame % 100 === 0) {
    objZombie = new Zombie(random(), zombieRandomY)
    objZombie2 = new Zombie(random(), zombieRandomY)
    arrZombie.push(objZombie);
    arrZombie2.push(objZombie2);
  }
}

function reDrawZombies() {
  for (let i = 0; i < arrZombie.length; i++) {
    arrZombie[i].drawZombie();
    arrZombie[i].moveZombie();
  }
}

function reDrawZombies2() {
  for (let i = 0; i < arrZombie2.length; i++) {
    arrZombie2[i].drawZombie();
    arrZombie2[i].moveZombie2();
  }
}

Zombie.prototype.moveZombie = function () {

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
}

Zombie.prototype.moveZombie2 = function () {

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawMap(startFor, maxWidth, startH, imgPath) {
  for (let i = startFor; i < maxWidth; i += 50) {
    let Bg = new Image();
    Bg.src = imgPath
    game.drawImage(Bg, i, startH, 50, 50)
  }
}

function drawHouse(startW, startH, imgPath) {
  let Bg = new Image();
  Bg.src = imgPath
  game.drawImage(Bg, startW, startH, 50, 50)
}

function drawObj(startW, startH, imgPath, wObj, hObj) {
  let Bg = new Image();
  Bg.src = imgPath
  game.drawImage(Bg, startW, startH, wObj, hObj)
}

function drawGame() {

  for (let i = 0; i < arrAssets.length; i++) {
    drawMap(arrAssets[i].startFor, arrAssets[i].maxWidth, arrAssets[i].startH, arrAssets[i].imgPath)
  }

  for (let i = 0; i < arrAssetsHouse.length; i++) {
    drawHouse(arrAssetsHouse[i].startW, arrAssetsHouse[i].startH, arrAssetsHouse[i].imgPath)
  }

  for (let i = 0; i < arrAssetsObjs.length; i++) {
    drawObj(arrAssetsObjs[i].startW, arrAssetsObjs[i].startH, arrAssetsObjs[i].imgPath, arrAssetsObjs[i].wObj, arrAssetsObjs[i].hObj)
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////