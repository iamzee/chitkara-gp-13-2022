


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;

let snakeCells = [[0, 0], [50, 0]];

let boardWidth = 1000;
let boardHeight = 600;

setInterval(function() {
  update();
  draw();
}, 100);

function update() {
  // getting snake head
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];

  // updating snake head
  let newHeadX = headX + cellSize;
  let newHeadY = headY;

  // updating snakeCells array
  snakeCells.push([newHeadX, newHeadY]);
  snakeCells.shift();
}

function draw() {
  ctx.clearRect(0, 0, boardWidth, boardHeight);

  for (let cell of snakeCells) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
  }
}