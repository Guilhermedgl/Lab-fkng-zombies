let frame = 0

window.onload = function () {
    document.getElementById('start-game').onclick = function () {
        startGame();
    }
}

function startGame() {
    createZombie();
    setInterval(render, 1);
}

function render() {
    game.clearRect(0, 0, 1300, 650);    
    frame += 1
    drawGame();
    drawSoldier();
    createZombie();
    reDrawZombies();
    console.log(frame)
    
}
window.addEventListener('keydown', move, false);