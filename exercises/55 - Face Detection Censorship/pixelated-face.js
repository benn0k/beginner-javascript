// Grab dom elements and create canvas context/faceDetector
const video = document.querySelector('.webcam');
const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);
console.log(optionsInputs);
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const Facectx = faceCanvas.getContext('2d');

// create new FaceDetector
const faceDetector = new window.FaceDetector();
// Options to adjust size/scale
const options = {
  SIZE: 10,
  SCALE: 1.5,
};
// Function to handle changes to options
function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// Write a function that will populate webcam stream in canvas
async function populateVideo() {
  // Get Webcam stream
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });

  // Set stream to video source
  video.srcObject = stream;

  // await video and play it
  await video.play();

  // size the canvases to be the same size and the video
  // ^ (video needs to be initialized before we can access these values)
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // And for faceCanvas
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

// Face Detection Function
async function detect() {
  const faces = await faceDetector.detect(video);
  // run detect() on browser frame animation
  requestAnimationFrame(detect);
  faces.forEach(drawFace);
  faces.forEach(censor);
}

// Draw Bounding box on face on Face
function drawFace(face) {
  // pull variables for width, height, top, left in boundingBox
  // This is called from detect() by calling faceDetector.detect on our video
  const { width, height, top, left } = face.boundingBox;

  // Default styles
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;

  // Clear previous rectangle before drawing next
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Rectangle
  ctx.strokeRect(left, top, width, height);
}
// Censor Face
function censor({ boundingBox: face }) {
  Facectx.imageSmoothingEnabled = false;
  Facectx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // Draw Small Face
  Facectx.drawImage(
    // 5 Source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );
  // draw small face back, but scale up

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;

  Facectx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (width - face.height) / 2,
    height,
    width
  );
}
populateVideo().then(detect);
