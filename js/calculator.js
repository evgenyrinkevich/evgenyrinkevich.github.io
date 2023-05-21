let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

const buttonClick = (value) => {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
};

const handleSymbol = (symbol) => {
  switch (symbol) {
    case 'C':
      buffer = 0;
      runningTotal = 0;
      screen.innerText = buffer;
      break;

    default:
      break;
  }
};

const handleNumber = (numberString) => {
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  screen.innerText = buffer;
};

const init = () => {
  document.querySelector('.calc-buttons').addEventListener('click', (e) => {
    buttonClick(e.target.innerText);
  });
};

init();
