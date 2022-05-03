// console.log(`we in here!!!`);

// const p = document.querySelector('p');
// const img = document.querySelectorAll('.items img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// const pizzaList = document.querySelector('.pizza');
// // heading.textContent = 'Ryan is Cool';
// // console.dir(heading.outerHTML);
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('nice');
pic.classList.toggle('round');
console.log(pic);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.alt = 'cute pup';
// console.log(pic.naturalWidth);

pic.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});
pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
