const mainNavigation = document.querySelector('.navigation');
const mainNavigationToggle = document.querySelector('.navigation__toggle');

const setDropdownState = () => {
  mainNavigation.classList.toggle('navigation--closed');
  mainNavigation.classList.toggle('navigation--open');
};

const initializeDropdown = () => {
  mainNavigationToggle.addEventListener('click', setDropdownState);
};

export { initializeDropdown };
