const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll('.buy');

function handleClick() {
  console.log('🐛 I have been clicked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', hooray);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// Listen on multiple items
function handleByButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleByButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', function (e) {
  // console.log(e.currentTarget);
  console.log(this);
});

// function buyItem() {
//   console.log('buying item!');
// }

// buyButtons.forEach((buyButton) => {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });
