let frame = 0
let interval;

window.onload = function () {
    $("#canvas").hide();
    $("h2").hide()
    document.getElementById('start-game').onclick = function () {
        $("h1").hide()
        $("button").hide()
        $("canvas").show()
        startGame();
    }
}

function startGame() {
    createSoldiers();
    interval = setInterval(render, 25);
}

function render() {
    game.clearRect(0, 0, 1300, 650);
    frame += 1
    objSoldier1.draw();
    objSoldier2.draw();
    collision();
    reDrawBullets();
    createZombie();
    reDrawZombies();
    playerCollision();
}
window.addEventListener('keydown', move, false);