console.log(`we in here!!!`);

// Select Elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

//Create variables for width/height of canvas
let canvasX = canvas.width;
let canvasY = canvas.height;

// Set up Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;

// set random num variables to use for starting point
const ranNumber = (num) => Math.floor(Math.random() * num);



x = ranNumber(1600);
y = ranNumber(1000);

// set beginning draw point
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// set initial hue color for line and set strokestyle color
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// Write Draw function
function draw({ key }) {
  console.log(key);
  // Increment hue
  hue += 1;
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  //start draw path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //Move to new location
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  // Draw
  ctx.lineTo(x, y);
  ctx.stroke();
}
// Write handler for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });

    console.log(`Handling Key`);
  }
}
// Clear shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0,0,canvasX,canvasY);
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
