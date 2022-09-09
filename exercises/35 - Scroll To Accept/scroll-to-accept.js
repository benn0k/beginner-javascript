console.log(`we in here!!!`);
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  if (!terms){
      return; // exit
  }

  terms.addEventListener('scroll', function (e) {
    console.log(e);
  });
}

scrollToAccept();