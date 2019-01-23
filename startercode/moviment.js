/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable default-case */

// variables
let dir;
const soldierImg = './images/survivor1_top.png';

// Moviment
const move = (e) => {
  const x = e.keyCode;
  switch (x) {
    case 65:
      soldier.img.src = './images/survivor1_left.png';
      if (soldier.x <= 0) {
        soldier.x += 0;
      } soldier.x -= 20;
      dir = 'Esquerda';
      break;

    case 87:
      soldier.img.src = './images/survivor1_top.png';
      dir = 'Cima';
      if (soldier.y <= 0) {
        soldier.y += 0;
      } soldier.y -= 20;
      break;

    case 68:
      soldier.img.src = './images/survivor1_rigth.png';
      if (soldier.x >= 1250) {
        soldier.x += 0;
      } soldier.x += 20;
      dir = 'Direita';
      break;

    case 83:
      soldier.img.src = './images/survivor1_down.png';
      if (soldier.y + 37 >= 639) {
        soldier.y += 0;
      } soldier.y += 20;
      dir = 'Baixo';
      break;

    case 32:
      const bullet = new Bullet(dirBulletX(), dirBulletY(), dir);
      arrBullets.push(bullet);
      break;
  }
};
