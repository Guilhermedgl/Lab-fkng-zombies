let game = document.getElementById("canvas").getContext("2d");

let soldierX = 600;
let soldierY = 300;
let dir = "Cima"
let soldierImgPath = "../topdown-shooter/PNG/Survivor 1/survivor1_top.png"
let zombiePath = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png";
let arrZombie = [];
let objZombie;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function move(e) {
    var x = e.keyCode
    switch (x) {

        case 65:
            soldierImgPath = "../topdown-shooter/PNG/Survivor 1/survivor1_left.png"
            soldierX -= 20;
            dir = 'Esquerda';
            break;

        case 87:
            soldierImgPath = "../topdown-shooter/PNG/Survivor 1/survivor1_top.png"
            soldierY -= 20;
            dir = 'Cima';
            break;

        case 68:
            soldierImgPath = "../topdown-shooter/PNG/Survivor 1/survivor1_rigth.png"
            soldierX += 20;
            dir = 'Direita';
            break;

        case 83:
            soldierImgPath = "../topdown-shooter/PNG/Survivor 1/survivor1_down.png"
            soldierY += 20;
            dir = 'Baixo';
            break;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function Zombie(zX, zY) {
    this.zX = zX;
    this.zY = zY;
    this.zombieImg = new Image();
    this.zombieImg.src = zombiePath
}

Zombie.prototype.drawZombie = function () {
    game.drawImage(this.zombieImg, this.zX, this.zY, 37, 37)
}

function createZombie() {
    let zombieRandomX = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
    let zombieRandomY = Math.floor(Math.random() * (600 - 0 + 1)) + 0;

    if (frame % 10 === 0) {
        const objZombie = new Zombie(zombieRandomX, zombieRandomY)
        arrZombie.push(objZombie)
    }
}

function reDrawZombies() {
    for (let i = 0; i < arrZombie.length; i++) {
        arrZombie[i].drawZombie();
        arrZombie[i].moveZombie();
    }
}

Zombie.prototype.moveZombie = function () {

    if (this.zY < soldierY) {
        this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_down.png"
        this.zY += 1;
    } else if (this.zX < soldierX) {
        this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_rigth.png"
        this.zX += 1;
    } else if (this.zY > soldierY) {
        this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_top.png"
        this.zY -= 1;
    } else if (this.zX > soldierX) {
        this.zombieImg.src = "../topdown-shooter/PNG/Survivor 1/zoimbie1_left.png"
        this.zX -= 1;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawSoldier() {
    let soldier = new Image();
    soldier.src = soldierImgPath;
    game.drawImage(soldier, soldierX, soldierY, 37, 37);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

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