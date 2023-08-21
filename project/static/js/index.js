const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// to use bikes.html instead of seperate pages for each (via app.py)
// Tabs
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


// Keyboard navigation
// change focus on key input by calling function
tabList.addEventListener('keydown', changeTabFocus);

// allow select
// loop through each tab
tabs.forEach((tab) => {
  // listen for click and call function
  tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  
  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1);
  }
  
  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    // ensure keyboard scrolling does not go out of bounds
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }
  
  // if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    // ensure keyboard scrolling does not go out of bounds
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  // set selected tabindex to 0
  tabs[tabFocus].setAttribute("tabindex", 0);
  // set the focus on that tab
  tabs[tabFocus].focus();
};


function changeTabPanel(e) {
  // select target
  const targetTab = e.target;
  // get attribute to select individually
  const targetPanel = targetTab.getAttribute("aria-controls");

  // identify parent and select
  const tabContainer = targetTab.parentNode;
  // identify parent above that and select
  const mainContainer = tabContainer.parentNode;

  // all data to be hidden before new (selected) data is displayed
  mainContainer
    .querySelectorAll('article')
    .forEach((article) => article.setAttribute("hidden", true));

  // remove hidden attribute from selected data (will select all siblings of that)
  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");
}
