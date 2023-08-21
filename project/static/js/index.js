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
})

// bikes.html
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

// Keyboard naigation
tabList.addEventListener('keydown', (e) => {
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
})

