// const game = document.getElementById('canvas').getContext('2d');

//  variables
// let dir;
// const soldierImg = './images/Survivor 1/survivor1_top.png';
// const zombiePath = './images/Survivor 1/zoimbie1_top.png';
// const arrZombie = [];
// const arrZombie2 = [];
// const arrBullets = [];
// let zombie;
// let zombie2;
// let soldier;

// Moviment
// function move(e) {
//   const x = e.keyCode;
//   switch(x) {
//     case 65:
//     soldier.img.src = './images/Survivor 1/survivor1_left.png';
//     if (soldier.x <= 0) {
//       soldier.x += 0;
//     } soldier.x -= 20;
//     dir = 'Esquerda';
//     break;

//     case 87:
//       soldier.img.src = './images/Survivor 1/survivor1_top.png'
//       dir = 'Cima';
//       if (soldier.y <= 0) {
//         soldier.y += 0
//       } soldier.y -= 20;
//       break;

//     case 68:
//       soldier.img.src = './images/Survivor 1/survivor1_rigth.png'
//       if (soldier.x >= 1250) {
//         soldier.x += 0
//       } soldier.x += 20;
//       dir = 'Direita';
//       break;

//     case 83:
//       soldier.img.src = './images/Survivor 1/survivor1_down.png'
//       if (soldier.y + 37 >= 639) {
//         soldier.y += 0
//       } soldier.y += 20
//       dir = 'Baixo';
//       break;

//     case 32:
//       const bullet = new Bullet(dirBulletX(), dirBulletY(), dir)
//       arrBullets.push(bullet)
//       break;
//   }
// }

// function dirBulletY() {
//   if (dir === 'Cima') return soldier.y + 3;
//   if (dir === 'Esquerda') return soldier.y + 15;
//   if (dir === 'Baixo') return soldier.y + 35;
//   if (dir === 'Direita') return soldier.y + 30;
// }

// function dirBulletX() {
//   if (dir === 'Cima') return soldier.x + 30;
//   if (dir === 'Esquerda') return soldier.x - 5;
//   if (dir === 'Baixo') return soldier.x + 8;
//   if (dir === 'Direita') return soldier.x + 30;
// }

// // Bullet constructor
// function Bullet(x, y, direction) {
//   this.x = x;
//   this.y = y;
//   this.dir = direction;
// }

// Bullet.prototype.draw = function () {
//   game.strokeRect(this.x, this.y, 2, 2);
// };

// // Draw bullets
// function reDrawBullets() {
//   arrBullets.forEach((bullet) => {
//     if (bullet.dir === 'Cima') bullet.y -= 10;
//     if (bullet.dir === 'Baixo')	bullet.y += 10;
//     if (bullet.dir === 'Esquerda') bullet.x -= 10;
//     if (bullet.dir === 'Direita') bullet.x += 10;
//     bullet.draw();
//   });
// }

// Zombie constructor
// function Zombie(x, y) {
//   this.x = x;
//   this.y = y;
//   this.zombieImg = new Image();
//   this.zombieImg.src = zombiePath;
// }

// Zombie.prototype.drawZombie = function () {
//   game.drawImage(this.zombieImg, this.x, this.y, 40, 40);
// }

// function createZombie() {
//   let zombieRandomY = Math.floor(Math.random() * (650 - -50 + 1)) + 0;
//   function random() {
//     let zombieRandomX = Math.floor(Math.random() * (-50 - -48)) - 48;
//     if (zombieRandomX > -50) {
//       return zombieRandomX + 1300;
//     } return zombieRandomX;
//   }
//   if (frame % 10 === 0) {
//     zombie = new Zombie(random(), zombieRandomY);
//     arrZombie.push(zombie);
//   }
// }

// function reDrawZombies() {
//   for (let i = 0; i < arrZombie.length; i++) {
//     arrZombie[i].drawZombie();
//     arrZombie[i].moveZombie();
//   }
// }

// Zombie.prototype.moveZombie = function () {
//   let d1 = Math.sqrt(Math.pow((soldier.x - zombie.x), 2) + Math.pow((soldier.y - zombie.y), 2));
//   if (d1 < d2) {
//     if (this.y < soldier.y) {
//       this.zombieImg.src = './images/Survivor 1/zoimbie1_down.png'
//       this.y += 2;
//     }
//     if (this.x < soldier.x) {
//       this.zombieImg.src = './images/Survivor 1/zoimbie1_rigth.png'
//       this.x += 2;
//     }
//     if (this.y > soldier.y) {
//       this.zombieImg.src = './images/Survivor 1/zoimbie1_top.png'
//       this.y -= 2;
//     }
//     if (this.x > soldier.x) {
//       this.zombieImg.src = './images/Survivor 1/zoimbie1_left.png'
//       this.x -= 2;
//     }
//   }
// };

// //  Soldier contructor
// function Soldier(imgPath) {
//   this.x = 600;
//   this.y = 350;
//   this.img = new Image();
//   this.img.src = imgPath;
// }

// Soldier.prototype.draw = function () {
//   game.drawImage(this.img, this.x, this.y, 40, 40)
// };

// function createSoldiers() {
//   soldier = new Soldier(soldierImg);
// }

// //Collision
// function collision() {
//   arrBullets.forEach(function (bullet, i) {
//     arrZombie.forEach(function (zombie, i) {
//       if ((bullet.x >= zombie.x && bullet.x <= zombie.x + 40) && (bullet.y >= zombie.zY && bullet.y <= zombie.zY + 40)) {
//         arrZombie.splice(i, 1)
//         arrBullets.splice(i, 2)
//       }
//     })
//   })
// }

// function playerCollision() {
//   arrZombie.forEach(function (zombie) {
//     if ((zombie.x >= soldier.x && zombie.x <= soldier.x + 38) && (zombie.y >= soldier.y && zombie.y <= soldier.y + 38) || (zombie.x >= objSoldier2.x && zombie.x <= objSoldier2.x + 38) && (zombie.y >= objSoldier2.y && zombie.y <= objSoldier2.y + 38)) {
//       clearInterval(interval)
//       $('#canvas').hide()
//       $('h2').show()
//     }
//   })
// }