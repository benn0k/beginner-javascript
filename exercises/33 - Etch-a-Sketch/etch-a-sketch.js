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
ctx.beginPath;

//set random num variables to use for starting point
const ranNumber = (num) => {
    return ranNum = Math.floor(Math.random() * num)
}
 
const ranWidth = ranNumber(1000);
const ranHeight = ranNumber(1600); 

//set beginning draw point
ctx.moveTo(ranHeight,ranWidth);
ctx.lineTo(ranHeight,ranWidth);
ctx.stroke();

//Write Draw function

//Write handler for keys

// Clear shake function

//Listen for arrow keys

@media only screen and (max-width: 359px) {
    #mv-content-mobile-wrapper > div > div:first-of-type >div {padding-left: 10px !important; pading-right: 10px !important;}
}