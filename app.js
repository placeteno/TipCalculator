const btnPercentages = document.querySelectorAll(
  '.btns-form input[type=button]'
);
const btnCustom = document.querySelector('.btns-form input[type=text]');
let tipPerPerson = document.querySelector('.results__tip-person');
let tipTotal = document.querySelector('.results__tip-total');
const inputBill = document.querySelector('input[name="billamount"]');
const inputPeople = document.querySelector('input[name="npeople"]');
const errorMessage = document.querySelector('.cantbezero');

const calculateTip = function (input) {
  if (Number(inputPeople.value) > 0) {
    inputPeople.style.border = 'none';
    errorMessage.style.display = 'none';
    const inputPercetage = Number(input.value);
    const tip =
      (Number(inputBill.value) * inputPercetage) /
      100 /
      Number(inputPeople.value);
    tipPerPerson.textContent = `$${tip.toFixed(2)}`;
    tipTotal.textContent = `$${(
      Number(inputBill.value) / Number(inputPeople.value) +
      tip
    ).toFixed(2)}`;
  } else {
    errorMessage.style.display = 'inline';
    inputPeople.style.border = '1px solid rgb(255, 115, 0)';
  }
};

btnPercentages.forEach(function (input, _, btnPercentages) {
  input.addEventListener('click', () => {
    calculateTip(input);
  });
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculateTip(btnCustom);
  }
});

document.querySelector('.reset-btn').addEventListener('click', () => {
  tipPerPerson.textContent = '$0.00';
  tipTotal.textContent = '$0.00';
  inputBill.value = '';
  inputPeople.value = '';
  inputPeople.style.border = 'none';
  errorMessage.style.display = 'none';
  btnCustom.value = '';
});
