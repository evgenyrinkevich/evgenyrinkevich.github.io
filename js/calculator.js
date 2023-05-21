let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');

const buttonClick = (value) => {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
};

const handleMath = (symbol) => {
  if (buffer === '0') return;

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;

  buffer = '0';
};

const flushOperation = (intBuffer) => {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if (previousOperator === '-') {
    runningTotal -= intBuffer;
  } else if (previousOperator === '×') {
    runningTotal *= intBuffer;
  } else if (previousOperator === '÷') {
    runningTotal /= intBuffer;
  }
};

const handleSymbol = (symbol) => {
  switch (symbol) {
    case 'C':
      buffer = 0;
      runningTotal = 0;
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
    case '=':
      if (previousOperator === null) return;
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
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
