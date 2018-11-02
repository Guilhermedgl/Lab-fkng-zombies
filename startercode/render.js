let frame = 0

window.onload = function () {
    $("#canvas").hide()
    document.getElementById('start-game').onclick = function () {
        $("h1").remove()
        $("h2").remove()
        $("button").remove()
        $("canvas").show()
        startGame();
    }
}

function startGame() {
    createZombie();
    createSoldiers();
    setInterval(render, 25);
}

function render() {
    game.clearRect(0, 0, 1300, 650);

    frame += 1
    //drawGame();
    //createZombie();
    objSoldier1.draw();
    objSoldier2.draw();
    //reDrawBullets2();
    reDrawBullets();
    //reDrawZombies();
    //reDrawZombies2();
}
window.addEventListener('keydown', move, false);