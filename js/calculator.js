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
  screen.innerText = buffer;
};

const handleMath = (symbol) => {};

const handleSymbol = (symbol) => {
  switch (symbol) {
    case 'C':
      buffer = 0;
      runningTotal = 0;
      break;
    case '&plus;':
    case '&minus;':
    case '&divide;':
    case '&times;':
      handleMath(symbol);
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
};

const init = () => {
  document.querySelector('.calc-buttons').addEventListener('click', (e) => {
    buttonClick(e.target.innerText);
  });
};

init();
