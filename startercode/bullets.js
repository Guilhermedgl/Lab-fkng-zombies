/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Bullet constructor
function Bullet(x, y, direction) {
  this.x = x;
  this.y = y;
  this.dir = direction;
}

Bullet.prototype.draw = function () {
  game.fillRect(this.x, this.y, 3, 3);
};

// Draw bullets
function reDrawBullets() {
  arrBullets.forEach((bullet) => {
    if (bullet.dir === 'Cima') bullet.y -= 10;
    if (bullet.dir === 'Baixo') bullet.y += 10;
    if (bullet.dir === 'Esquerda') bullet.x -= 10;
    if (bullet.dir === 'Direita') bullet.x += 10;
    bullet.draw();
  });
}

function dirBulletY() {
  if (dir === 'Cima') return soldier.y + 3;
  if (dir === 'Esquerda') return soldier.y + 15;
  if (dir === 'Baixo') return soldier.y + 35;
  if (dir === 'Direita') return soldier.y + 30;
}

function dirBulletX() {
  if (dir === 'Cima') return soldier.x + 30;
  if (dir === 'Esquerda') return soldier.x - 5;
  if (dir === 'Baixo') return soldier.x + 8;
  if (dir === 'Direita') return soldier.x + 30;
}
