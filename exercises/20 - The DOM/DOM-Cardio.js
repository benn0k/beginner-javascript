console.log(`we in here!!!`);
// Make a div - document.createElement(args);
const myDiv = document.createElement('div');
// add a class of wrapper to it - classList.add(args)
myDiv.classList.add('wrapper');
// put it into the body - insertAdjacentElement will allow you to specify a position. Function takes location, followed by element you're trying to append
document.body.appendChild(myDiv);
// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

// set text content
li1.textContent = `one`;
li2.textContent = `two`;
li3.textContent = `three`;

// append to wrapper
myList.appendChild(li1);
myList.appendChild(li2);
myList.appendChild(li3);

// put that list into the above wrapper
myDiv.appendChild(myList);

// create image
const myImage = document.createElement('img');

// Set src
myImage.src = `http://picsum.photos/500`;

// set the width to 250
myImage.width = 250;

// add a class of cute
myImage.classList.add(`cute`);

// add an alt of Cute Puppy
myImage.alt = `Cute Puppy`;

// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="debug">
    <p> Paragraph One
        <p> Paragraph 2
        
        </p>
    </p>
</div>
`;
// put this div before the unordered list from above
// Way #1 with a fragment
const myFragment = document.createRange().createContextualFragment(myHTML);
// Insert Before takes two args, the node you're wanting to add, and the child location you're wanting to append before
// const myFragment = document.createRange().createContextualFragment(myHTML);
// wrapper.insertBefore(myFragment, ul);
myDiv.insertBefore(myFragment, myImage);

// Way #2 with raw HTML
const myDiv2 = document.createElement(`div`);
myDiv2.classList.add('debug');
const myParagraph1 = document.createElement(`p`);
const myParagraph2 = document.createElement(`p`);

// build it
myDiv2.appendChild(myParagraph1);
myParagraph1.appendChild(myParagraph2);

// append
myDiv.insertAdjacentElement('beforeend', myDiv2);

// select ul element inside wrapper
const myElement = document.querySelector('.wrapper > ul');
// add a class to the second paragraph called warning
document.querySelector('.wrapper  p:nth-of-type(2)').classList.add('warning');
// remove the first paragraph
document.querySelector('.wrapper  p:nth-of-type(1)').remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  const playerCardHTML = `
  <div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
   <button class='delete button' type='button'>&times; Delete</button>
 </div>
 
    `;
  const playerCardFragment = document
    .createRange()
    .createContextualFragment(playerCardHTML);

  return playerCardHTML;
}
// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// append those cards to the div
let cards = generatePlayerCard('ryan', 28, '6 ft.');
cards += generatePlayerCard('gabs', 24, `4 '8 ft.`);
cards += generatePlayerCard('brady', 25, `6 '1 ft.`);
cards += generatePlayerCard('jon', 20, `5'11 ft`);

cardDiv.innerHTML = cards;

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
// select all buttons

const buttons = document.querySelectorAll('.button');

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}

buttons.forEach((button) => button.addEventListener('click', deleteCard));
