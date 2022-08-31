console.log(`we in here!!!`);

// Select Elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Set up Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// This starts the Draw

// set random num variables to use for starting point
const ranNumber = (num) => Math.floor(Math.random() * num);

// Not needed, but we can assign variables in objects like this. This creates two mutable variables named ranWidth and ranHeight = the width/height of the canvas.
let { ranWidth, ranHeight } = canvas;

ranWidth = ranNumber(1000);
ranHeight = ranNumber(1600);

// set beginning draw point
ctx.beginPath();
ctx.moveTo(ranHeight, ranWidth);
ctx.lineTo(ranHeight, ranWidth);
ctx.stroke();

// Write Draw function
function draw(options)
// Write handler for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    console.log(e.key);
    console.log(`Handling Key`);
  }
}
// Clear shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
