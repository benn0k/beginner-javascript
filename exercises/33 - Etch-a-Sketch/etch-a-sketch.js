console.log(`we in here!!!`);
//* Set up Canvas and set global variables 
// Select Elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

//Create Constant for amount the etch a sketch should be moving
const MOVE_AMOUNT = 20;

//Create variables for width/height of canvas (for later use)
let canvasX = canvas.width;
let canvasY = canvas.height;

// Set up Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//Sets width of drawing line
ctx.lineWidth = 40;

// Function to create random numbers for starting point
const ranNumber = (num) => Math.floor(Math.random() * num);

x = ranNumber(canvasX);
y = ranNumber(canvasY);

// Set variable for starting number, somewhere on hsl 360
let hue = ranNumber(360);

// set beginning draw point
ctx.beginPath();
//moveTo and lineTo move the draw pointer 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.stroke();

// set initial hue color for line and set strokestyle color



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
