// Select shopping form and list
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold state
let items = [];

// Submit handler for Add Item
function handleSubmit(e) {
  // Stop reload on submit
  e.preventDefault();
  // Save name from form
  const name = e.currentTarget.item.value;
  // Return if field is null
  if (!name) return;
  // bundle items into object
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push items into state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // Clear Form
  e.currentTarget.item.value = '';
  // Fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Display Items
function displayItems() {
  // Create list HTML from items
  const html = items
    // loop over each and return formatted HTML
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox" value="${item.id}" ${
        item.complete ? 'checked' : ''
      }>
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}"
      value="${item.id}">&times;</button>
  </li>`
    )
    .join('');
  // Add list HTML
  list.innerHTML = html;
}
// Save to Local Storage
function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

// Restore from local storage
function restoreFromLocalStorage() {
  // Pull items from Local Storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // If there is items in list
    items.push(...lsItems); // spread lsItems into items
    list.dispatchEvent(new CustomEvent('itemsUpdated')); // dispatch itemsUpdated
  }
}
// Delete Item
function deleteItem(id) {
  // Listen for click on <ul>, but delegate the click over to the button if that is what was clicked
  console.log('Deleting Item', id);
  // update items array
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated')); // dispatch itemsUpdated
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated')); // dispatch itemsUpdated
}

// Submit Handler
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems); // This bridges our two functions - trigger Display items
list.addEventListener('itemsUpdated', mirrorToLocalStorage); // Trigger mirrorToLocalStorage

list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

// Restore local storage call
restoreFromLocalStorage();
