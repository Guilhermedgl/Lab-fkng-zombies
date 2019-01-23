/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// variables
let soldier;

//  Soldier contructor
function Soldier(imgPath) {
  this.x = 600;
  this.y = 350;
  this.img = new Image();
  this.img.src = imgPath;
}

Soldier.prototype.draw = function () {
  game.drawImage(this.img, this.x, this.y, 30, 30);
};

function createSoldiers() {
  soldier = new Soldier(soldierImg);
}
