/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// variables
const arrBullets = [];
let score = 0;

//  Collision
function collision() {
  arrZombie.forEach((zombie, idx) => {
    arrBullets.forEach((bullet, i) => {
      if ((bullet.x >= zombie.x && bullet.x <= zombie.x + 40) && (bullet.y >= zombie.y && bullet.y <= zombie.y + 40)) {
        arrBullets.splice(i, 1);
        arrZombie.splice(idx, 1);
        score += 1;
      } else if (bullet.x > 1300 || bullet.x < 0 || bullet.y < 0 || bullet.y > 641)arrBullets.splice(i, 1);
    });
  });
}

function playerCollision() {
  arrZombie.forEach((zombie) => {
    if ((zombie.x >= soldier.x && zombie.x <= soldier.x + 40) && (zombie.y >= soldier.y && zombie.y <= soldier.y + 40)) {
      clearInterval(interval);
      $('#canvas').hide();
      $('h2').show();
    }
  });
}
