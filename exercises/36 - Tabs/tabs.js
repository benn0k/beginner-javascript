console.log('ya ya wes we get it.. IT WORKS!');
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"'));

function handleTabClick(e) {
  // console.log(e.currentTarget);

  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected

  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it
  const { id } = e.currentTarget;

  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;

  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;

  // console.log(id);
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
