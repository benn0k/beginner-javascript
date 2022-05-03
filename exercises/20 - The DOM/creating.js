console.log(`we in here!!!`);
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P!';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice Photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('custom');
myImage.classList.add = 'wrapper';
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('afterbegin', heading);

// Create a unordered list with 5 list elements inside of it Bonus: Wrap it in a div and give it styles
// create a wrapper to style with a class 'list-style'
const listWrapper = document.createElement('div');
listWrapper.classList.add('list-style');
// create li element
const listItem = document.createElement('ul');

// My Solution
// create a set of 'unorderedList' elements to include. There's def a better way to do this
const unorderedList1 = document.createElement('li');
unorderedList1.textContent = 'One';

const unorderedList2 = document.createElement('li');
unorderedList2.textContent = 'Two';

const unorderedList3 = document.createElement('li');
unorderedList3.textContent = 'Three';

const unorderedList4 = document.createElement('li');
unorderedList4.textContent = 'Four';

const unorderedList5 = document.createElement('li');
unorderedList5.textContent = 'Five';

// append the ListWrapper to myDiv
myDiv.insertAdjacentElement('afterend', listWrapper);
// append the listItem to listWrapper
listWrapper.insertAdjacentElement('afterbegin', listItem);

// append each unordered list item to list
listItem.appendChild(unorderedList1);
listItem.appendChild(unorderedList2);
listItem.appendChild(unorderedList3);
listItem.appendChild(unorderedList4);
listItem.appendChild(unorderedList5);

// Wes's solution

// const list = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'three';
// list.appendChild(li);

// document.body.insertAdjacentElement('afterbegin', list);
