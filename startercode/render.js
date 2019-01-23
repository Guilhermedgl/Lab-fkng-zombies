/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const game = document.getElementById('canvas').getContext('2d');


let frame = 0;
let interval;

const render = () => {
  game.clearRect(0, 0, 1300, 650);
  frame += 1;
  soldier.draw();
  collision();
  reDrawBullets();
  createZombie();
  reDrawZombies();
  playerCollision();
  updateScore();
};

const startGame = () => {
  createSoldiers();
  interval = setInterval(render, 30);
};

window.onload = () => {
  $('#canvas').hide();
  $('.div-score').hide();
  $('h2').hide();
  document.getElementById('start-game').onclick = () => {
    $('h1').hide();
    $('button').hide();
    $('canvas').show();
    $('.div-score').show();
    startGame();
  };
};

window.addEventListener('keyup', move, false);
