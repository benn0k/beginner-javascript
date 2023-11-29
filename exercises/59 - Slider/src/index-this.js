function Slider(slider) {
  // Check that slider is a valid instance
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  this.slider = slider;
  // Working Variables
  let current;
  let previous;
  let next;
  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.previousButton = slider.querySelector('.goToPrev');
  this.nextButton = slider.querySelector('.goToNext');

  // Construct our slider by setting working variables to matching slides in sliders
  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }
  // Update/apply classes to dom elements
  function applyClasses() {
    current.classList.add('current');
    previous.classList.add('prev');
    next.classList.add('next');
  }

  // Move classes on dom elements in slider
  function move(direction) {
    //  Strip all classes off current slides
    const classesToRemove = ['prev', 'current', 'next'];
    previous.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // if 'back' or 'previous'
    if (direction === 'back') {
      // Make a new array of the new values, and destructure them over into the previous, current, and next variables
      [previous, current, next] = [
        // Get the previous slide - if there is none, get the last slide from slider to wrap
        previous.previousElementSibling || slides.lastElementChild,
        previous,
        current,
      ];
    }
    // Otherwise, we go forward
    else {
      [previous, current, next] = [
        current,
        next,
        // Get the next slide - if there is none, get the first slide from slider to wrap
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    // Apply updated classes
    applyClasses();
  }

  // when this slider is created, run the start slider function and apply classes
  startSlider();
  applyClasses();

  // Event listeners
  previousButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

// Instantiate Sliders
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
