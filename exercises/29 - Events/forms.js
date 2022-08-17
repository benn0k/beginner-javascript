console.log(`we in here!!!`);
const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('You Clicked IT');
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (shouldChangePage) {
    window.location = e.currentTarget.href;
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
