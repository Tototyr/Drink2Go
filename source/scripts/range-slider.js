import noUiSlider from 'nouislider';


const rangeSlider = document.querySelector('.form__slider');
const minInput = document.querySelector('.form__slider-min');
const maxInput = document.querySelector('.form__slider-max');

const rangeInputs = [minInput, maxInput];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 900
    }
  });
}


rangeSlider.noUiSlider.on('update', (values, handle) => {
  rangeInputs[handle].value = Math.round(values[handle]);
});
