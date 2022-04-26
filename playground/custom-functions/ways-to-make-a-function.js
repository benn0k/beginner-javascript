console.log('we in here');

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// };

// function Expression - Not hoisted, needs to be declared before run
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Arrow Function - one line, anon,
const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// Returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// As an arrow
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

// IIFE
// Immediately Invoked Function Expression - Runs on start

(function (age) {
  console.log('Running the Anon function');
  return `You are cool and ${age}`;
})(19);

// Methods

const ryan = {
  name: 'Ryan Bennek',
  sayHi() {
    console.log(`Hey ${this.name}`);
  },
  yellHi() {
    console.log('HEY RYAAANN');
  },
  // Arrow function
  wisperHi: () => {
    console.log(`hissss im' a snake`);
  },
};

// Callback Function - Something that will happen when something is done. When clicked, run this.

// Click Callback

// Select Button
const button = document.querySelector('.clickMe');
// On Click, do this
// button.addEventListener('click', () => {
//   console.log('Nice Job!!!');
// });

// Timer Callback

setTimeout(() => {
  console.log('DONE!');
}, 5000);
