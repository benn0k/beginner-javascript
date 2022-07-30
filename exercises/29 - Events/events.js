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

function buyItem() {
  console.log('buying item!');
}

buyButtons.forEach((buyButton) => {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});
