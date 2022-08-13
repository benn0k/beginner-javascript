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
<div>
    <p>
        <p>
        
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
myDiv.insertBefore(myFragment, myList);
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
