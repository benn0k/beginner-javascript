// select buttons
const cardButtons = document.querySelectorAll('.card button');
// select model
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
//click handler function
function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  //grab image src
  const imageSrc = card.querySelector('img').src;
  //grab image description
  const desc = card.dataset.description;
  //grab name
  const name = card.querySelector('h2').textContent;
  //populate model with info
  modalInner.innerHTML = `
  <img width="600" height="600" src=${imageSrc.replace('200', '600')} alt="${name}"/>
  <p>${desc}</p>
  `;
  //show model
  modalOuter.classList.add('open');
}

//close model
function closeModal() {
  modalOuter.classList.remove('open');
}

//loop through and attach event listner
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

//close model if clicked outside of model
modalOuter.addEventListener('click', function (e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});
//close model if escape is clicked
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
