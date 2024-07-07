const toggleBefore = document.querySelector('.carousel__page-button--before');
const toggleAfter = document.querySelector('.carousel__page-button--after');
const slideItems = document.querySelectorAll('.carousel__item');
const pageList = document.querySelectorAll('.carousel__pagination-item');

const getActivePageIndex = (pages) => {
  const index = Array.from(pages).findIndex((page) => page.classList.contains('carousel__item--active'));
  return index;
};

const setPageActive = (oldIndex, newIndex) => {
  slideItems[oldIndex].classList.remove('carousel__item--active');
  pageList[oldIndex].classList.remove('carousel__pagination-item--active');

  slideItems[newIndex].classList.add('carousel__item--active');
  pageList[newIndex].classList.add('carousel__pagination-item--active');

  toggleBefore.disabled = newIndex === 0;
  toggleAfter.disabled = newIndex === (Array.from(slideItems).length - 1);
};

const onToggleBeforeClick = () => {
  const currentIndex = getActivePageIndex(slideItems);
  if (currentIndex > 0) {
    setPageActive(currentIndex, currentIndex - 1);
  }
};

const onToggleAfterClick = () => {
  const currentIndex = getActivePageIndex(slideItems);
  if (currentIndex >= 0 && currentIndex < slideItems.length - 1) {
    setPageActive(currentIndex, currentIndex + 1);
  }
};

const onPaginationButtonElementClick = ({ target }) => {
  const currentIndex = getActivePageIndex(slideItems);
  const newIndex = Array.from(pageList).indexOf(target);
  if (newIndex !== -1 && newIndex !== currentIndex) {
    setPageActive(currentIndex, newIndex);
  }
};

const initializeSlider = () => {
  toggleBefore.addEventListener('click', onToggleBeforeClick);
  toggleAfter.addEventListener('click', onToggleAfterClick);
  pageList.forEach((button) =>
    button.addEventListener('click', onPaginationButtonElementClick)
  );
};

export { initializeSlider };
