// const p = document.querySelector('p');
// const img = document.querySelector('.item ');
// const imgItem = img.querySelector('img');
// const heading = document.querySelector('h2');
// // console.log(p);
// // console.log(img);
// // console.log(imgItem);
// // console.dir(heading);

// // set textContent property
// // heading.textContent = 'Ryan is Cool and loves to Code ';

// // console.log(heading.innerHTML);
// // console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', `🍕`);

// *Classes

const picture = document.querySelector('.nice');
picture.classList.add('open');
picture.classList.remove('cool');

console.log(picture.classList);

function toggleRound() {
  picture.classList.toggle('round');
}

picture.addEventListener('click', toggleRound);

picture.alt = 'Starry Night';

// window.addEventListener('load', () => {
//   console.log(picture.naturalWidth);
// });

picture.width = 200;

picture.setAttribute('alt', 'REALLY CUTE PUP');

console.log(picture.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
