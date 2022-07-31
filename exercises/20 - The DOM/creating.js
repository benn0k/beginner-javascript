reat//  Paragraph element
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a Paragraph';
myParagraph.classList.add('special');

// Image Element

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Cool Photo';

// Div Element

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

// Build Document

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Sweet Stuff';

myDiv.insertAdjacentElement('afterbegin', heading);

/* <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
</ul> 
Place under new wrapper element */

// Create Elements

const list = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

// Add Text to elements

li1.textContent = 'One';
li2.textContent = 'Two';
li3.textContent = 'Three';
li4.textContent = 'Four';
li5.textContent = 'Five';

// Build List
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
list.appendChild(li5);

//  Append to wrapper
myDiv.insertAdjacentElement('afterbegin', list);
