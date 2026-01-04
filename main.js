// ================================
// パンチパーマおばさんの大冒険
// main.js
// ================================

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// 画面サイズ
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// おばさんキャラ
const obasan = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: 30,
  vx: 4,
};

// ゲームループ
function update() {
  obasan.x += obasan.vx;

  if (obasan.x > canvas.width - obasan.r || obasan.x < obasan.r) {
    obasan.vx *= -1;
  }
}

function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // おばさん（仮）
  ctx.beginPath();
  ctx.arc(obasan.x, obasan.y, obasan.r, 0, Math.PI * 2);
  ctx.fillStyle = "#ff66aa";
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("パンチパーマおばさん", canvas.width / 2, 50);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// ================================
// 起動処理（ここが超重要）
// ================================
window.addEventListener("load", () => {
  console.log("ゲーム起動");

  // ローディング解除（← 固まる原因の核心）
  if (window.gameReady) {
    window.gameReady();
  }

  loop();
});
