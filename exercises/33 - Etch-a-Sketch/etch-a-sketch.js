console.log(`we in here!!!`);

// Select Elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Set up Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// This starts the Draw

// set random num variables to use for starting point
const ranNumber = (num) => Math.floor(Math.random() * num);

// Not needed, but we can assign variables in objects like this. This creates two mutable variables named ranWidth and ranHeight = the width/height of the canvas.
let { y, x } = canvas;

x = ranNumber(1600);
y = ranNumber(1000);


// set beginning draw point
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write Draw function
function draw({key}){
console.log(key)
//start draw patch
ctx.beginPath();
ctx.moveTo(x,y);
//Move to new location
x -= MOVE_AMOUNT;
y -= MOVE_AMOUNT;
// Draw
ctx.lineTo(x,y);
ctx.stroke();
}
// Write handler for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({key:e.key})
    
    console.log(`Handling Key`);
  }
}
// Clear shake function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
