/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// variables
let zombie;
const arrZombie = [];

// eslint-disable-next-line prefer-const
let zombiePath = './images/zoimbie1_top.png';

// Zombie constructor
function Zombie(x, y) {
  this.x = x;
  this.y = y;
  this.zombieImg = new Image();
  this.zombieImg.src = zombiePath;
}

Zombie.prototype.drawZombie = function () {
  game.drawImage(this.zombieImg, this.x, this.y, 30, 30);
};

function createZombie() {
  if (frame % 18 === 0) {
    zombieTop = new Zombie(Math.floor((Math.random() * 1300)), -2);
    arrZombie.push(zombieTop);
    zombieLeft = new Zombie(-10, (Math.random() * 650));
    arrZombie.push(zombieLeft);
    zombieDown = new Zombie((Math.random() * 1300), 660);
    arrZombie.push(zombieDown);
    zombieRight = new Zombie(1350, (Math.random() * 650));
    arrZombie.push(zombieRight);
  }
}

function reDrawZombies() {
  for (let i = 0; i < arrZombie.length; i += 1) {
    arrZombie[i].drawZombie();
    arrZombie[i].moveZombie();
  }
}

Zombie.prototype.moveZombie = function () {
  if (this.y < soldier.y) {
    this.zombieImg.src = './images/zoimbie1_down.png';
    this.y += 2;
  }
  if (this.x < soldier.x) {
    this.zombieImg.src = './images/zoimbie1_rigth.png';
    this.x += 2;
  }
  if (this.y > soldier.y) {
    this.zombieImg.src = './images/zoimbie1_top.png';
    this.y -= 2;
  }
  if (this.x > soldier.x) {
    this.zombieImg.src = './images/zoimbie1_left.png';
    this.x -= 2;
  }
};
