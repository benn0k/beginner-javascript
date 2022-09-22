console.log('ya ya wes we get it.. IT WORKS!');
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"');

function handleTabClick(e) {
  console.log(e.currentTarget);

  // hide all tab buttons
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  // mark the clicked tab as selected
  // find the associated tabPanel and show it
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
