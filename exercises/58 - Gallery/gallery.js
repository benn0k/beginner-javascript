function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  // Set current image for logic
  let currentImage;
  // Function to open Modal
  function openModal() {
    // Check if Modal is already open
    if (modal.matches('.open')) {
      return;
    }
    // if not open, add open class to modal - this opens model on document
    modal.classList.add('open');

    // Add Event Listeners to catch clicks/keys for logic
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  // Close Modal
  function closeModal() {
    // Remove open class to close modal
    modal.classList.remove('open');
    // Remove ELs when closing model so we don't get weird errors
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  // Close Modal if click outside modal
  function handleClickOutside(e) {
    // if the click target and the model target are the same, you've clicked on
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  // Key Handlers
  function handleKeyUp(e) {
    // if Escape is hit, close modal
    if (e.key === 'Escape') return closeModal();
    // If right key, show next Image
    if (e.key === 'ArrowRight') return showNextImage();
    // If Left key, show previous Image
    if (e.key === 'ArrowLeft') return showPreviousImage();
  }

  // This will show images in modal
  function showImage(el) {
    if (!el) {
      console.info('no images to show');
    }
    // Update image to clicked image
    modal.querySelector('img').src = el.src;
    // Update image title(h2) to set title on image
    modal.querySelector('h2').textContent = el.title;
    // Update description to description
    modal.querySelector('figure p').textContent = el.dataset.description;
    // Set current Image to current Image
    currentImage = el;
    openModal();
  }

  // Show Next Image
  function showNextImage(e) {
    // Show next image or wrap around and show first image
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  // Show Previous Image
  function showPreviousImage(e) {
    // Show next image or wrap around and show first image
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // Event Listeners
  images.forEach((image) =>
    // Parse through each iamges, when clicked, run showImage on clicked image
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  images.forEach((image) => {
    // Attach Event Listener for each image
    image.addEventListener('keyup', (e) => {
      // if Enter was key up'd, show image
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });

  // El for clicking outside to close modal
  modal.addEventListener('click', handleClickOutside);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
