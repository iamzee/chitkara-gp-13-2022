

let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');

// draw a rectangle
// ctx.fillStyle = 'red';
// ctx.fillRect(50, 40, 100, 150);

// draw a line
// ctx.beginPath();
// ctx.moveTo(30, 50);
// ctx.lineTo(100, 150);
// ctx.stroke();
// ctx.closePath();

// border a rectangle
// ctx.strokeStyle = 'red';
// ctx.strokeRect(50, 40, 100, 150);

// adding text
ctx.font = '48px sans-serif';
ctx.fillStyle = 'blue';
ctx.fillText('Hello world', 100, 150);

ctx.clearRect(0, 0, 500, 600);