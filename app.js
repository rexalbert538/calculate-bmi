'use strict';

const container = document.querySelector('.container');
const bmiHeight = document.querySelector('.bmi__height');
const bmiWeight = document.querySelector('.bmi__weight');
const h1El = document.querySelector('h2');
const pEl = document.querySelector('p');

const bmiCalc = () => {
  const height = Number(bmiHeight.value);
  const weight = Number(bmiWeight.value);
  bmiResult(height, weight);
};

const bmiResult = (height, weight) => {
  const calcHeight = (height / 100) * 2;
  const result = (weight / calcHeight).toFixed(2);

  if (result <= 17) {
    h1El.textContent = `Underweight`;
    h1El.style.color = `#5151ec`;
  } else if (result > 17 && result <= 25) {
    h1El.textContent = `Normal`;
    h1El.style.color = `#008000`;
  } else if (result > 25 && result <= 30) {
    h1El.textContent = `Overweight`;
    h1El.style.color = `#ffd000`;
  } else if (result >= 30) {
    h1El.textContent = `Obese`;
    h1El.style.color = `#ff6200`;
  }

  pEl.textContent = `Result : ${result}`;
};

container.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('btn__calc')) {
    bmiCalc();
  }
});
