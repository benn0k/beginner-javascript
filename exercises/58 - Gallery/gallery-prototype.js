/* eslint-disable no-use-before-define */
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  this.gallery = gallery;
  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');
  // Bind our methods to the instance when we need them

  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event Listeners
  this.images.forEach((image) =>
    // Parse through each images, when clicked, run showImage on clicked image
    image.addEventListener('click', (e) => this.showImage(e.currentTarget))
  );

  this.images.forEach((image) => {
    // Attach Event Listener for each image
    image.addEventListener('keyup', (e) => {
      // if Enter was key up'd, show image
      if (e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    });
  });

  // El for clicking outside to close modal
  this.modal.addEventListener('click', this.handleClickOutside);
}

// Function to open Modal
Gallery.prototype.openModal = function () {
  // Check if Modal is already open
  if (this.modal.matches('.open')) {
    return;
  }
  // if not open, add open class to modal - this opens model on document
  this.modal.classList.add('open');

  // Add Event Listeners to catch clicks/keys for logic
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPreviousImage);
};

// Close Modal
Gallery.prototype.closeModal = function () {
  // Remove open class to close modal
  this.modal.classList.remove('open');
  // Remove ELs when closing model so we don't get weird errors
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPreviousImage);
};

// Close Modal if click outside modal
Gallery.prototype.handleClickOutside = function (e) {
  // if the click target and the model target are the same, you've clicked on
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

// Key Handlers
Gallery.prototype.handleKeyUp = function (e) {
  // if Escape is hit, close modal
  if (e.key === 'Escape') return this.closeModal();
  // If right key, show next Image
  if (e.key === 'ArrowRight') return this.showNextImage();
  // If Left key, show previous Image
  if (e.key === 'ArrowLeft') return this.showPreviousImage();
};

// This will show images in modal
Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no images to show');
  }
  // Update image to clicked image
  this.modal.querySelector('img').src = el.src;
  // Update image title(h2) to set title on image
  this.modal.querySelector('h2').textContent = el.title;
  // Update description to description
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  // Set current Image to current Image
  this.currentImage = el;
  this.openModal();
};

// Show Next Image
Gallery.prototype.showNextImage = function (e) {
  // Show next image or wrap around and show first image
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

// Show Previous Image
Gallery.prototype.showPreviousImage = function (e) {
  // Show next image or wrap around and show first image
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
