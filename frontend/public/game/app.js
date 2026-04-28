const app = new PIXI.Application();
const bugList = [];
document.body.appendChild(app.view);

const hacker = PIXI.Sprite.from("assets/hacker.png");
hacker.x = 350;
hacker.y = 520;
hacker.scale.x = 0.1;
hacker.scale.y = 0.1;
app.stage.addChild(hacker);

gameInterval(function () {
  const bug = PIXI.Sprite.from("assets/bug" + random(1, 3) + ".png");
  bug.x = random(0, 700);
  bug.y = -25;
  bug.scale.x = 0.1;
  bug.scale.y = 0.1;
  app.stage.addChild(bug);
  bugList.push(bug);
  flyDown(bug, 1);

  waitForCollision(bug, hacker).then(function () {
    app.stage.removeChild(hacker);
    stopGame();
  });
}, 1000);

function leftKeyPressed() {
  hacker.x = hacker.x - 5;
}

function rightKeyPressed() {
  hacker.x = hacker.x + 5;
}

function spaceKeyPressed() {
  const bullet = PIXI.Sprite.from("assets/bullet.png");
  bullet.x = hacker.x + 13;
  bullet.y = hacker.y - 20;
  bullet.scale.x = 0.05;
  bullet.scale.y = 0.05;
  flyUp(bullet);
  app.stage.addChild(bullet);

  waitForCollision(bullet, bugList).then(function ([bullet, bug]) {
    app.stage.removeChild(bullet);
    app.stage.removeChild(bug);
  });
}

// Setze den Hintergrund auf weiß
app.renderer.backgroundColor = 0xffffff; // Weiß

// Zentriere das Spiel auf dem Bildschirm
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const gameWidth = 800; // Breite des Spiels
const gameHeight = 600; // Höhe des Spiels

// Berechne die Position des Spiels
const gamePosX = (screenWidth - gameWidth) / 2;
const gamePosY = (screenHeight - gameHeight) / 2;

// Setze die Position des Spielcontainers
app.view.style.position = "absolute";
app.view.style.left = `${gamePosX}px`;
app.view.style.top = `${gamePosY}px`;
