// Make a div - document.createElement(args);
const div = document.createElement('div');
// add a class of wrapper to it - classList.add(args)
div.classList.add('wrapper');
// put it into the body - insertAdjacentElement will allow you to specify a position. Function takes location, followed by element you're trying to append
document.body.appendChild(div);
// make an unordered list
const ul = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
console.log(ul);
// add ul element inside wrapper

// Create three li elements with text

// set the width to 250
// set the source to an image - .src // .alt

// add a class of cute
// add an alt of Cute Puppy

// Append that image to the wrapper
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// Way #1 with a fragment
// Insert Before takes two args, the node you're wanting to add, and the child location you're wanting to append before
// const myFragment = document.createRange().createContextualFragment(myHTML);
// wrapper.insertBefore(myFragment, ul);

// Way #2 with raw HTML
// select ul element inside wrapper

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

// select all buttons

const buttons = document.querySelectorAll('.delete');

function deleteCard() {
  const clickedButton = event.currentTarget;
  clickedButton.parentElement.remove();
  console.log('Delete Card!');
}

buttons.forEach((button) => button.addEventListener('click', deleteCard));
