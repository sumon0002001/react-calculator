import operate from './operate';

const operations = ['+', '-', '÷', 'X', '='];
const prepareData = (total, next, operation, buttonName, lastClicked) => {
  let result = null;
  if (buttonName === '.') {
    result = { total, next: next == null ? `0${buttonName}` : next + buttonName, operation };
  } else if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
    result = { total, next: next == null ? buttonName : next + buttonName, operation };
  } else {
    switch (buttonName) {
      case '+':
      case '-':
      case '÷':
      case 'X':
      case '=':
        if (total === null || total === 'undefined') {
          result = {
            total: next,
            next: null,
            operation: buttonName,
          };
        } else if (!operations.includes(lastClicked)) {
          result = { total, next, operation };
        }
        break;
      default:
        result = { total, next, operation };
    }
  }
  return result;
};

const calculate = ({
  total, next, operation, lastClicked,
}, buttonName) => {
  let result = null;
  if (total !== null && next !== null && operations.includes(buttonName) && buttonName !== '=') {
    result = operate(total, next, operation);
    result.total = result.next;
    result.next = null;
    result.operation = buttonName;
    return result;
  }
  if (total !== null && next !== null && buttonName === '%' && lastClicked !== '%') {
    if (operation === '+' || operation === '-') {
      result = operate(total, total * next, buttonName);
    } else {
      result = operate(total, next, buttonName);
    }
    result.operation = operation;
    return result;
  }
  const data = prepareData(total, next, operation, buttonName, lastClicked);
  if (buttonName === '.') {
    return data;
  }
  if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
    return data;
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  if (buttonName === '%') {
    result = operate(data.total, data.next, buttonName);
    return result;
  }
  if (lastClicked === '%' && buttonName !== '%' && operations.includes(buttonName) && buttonName !== '=') {
    result = { total, next, operation: buttonName };
    return result;
  }
  if (data.next !== null) {
    switch (buttonName) {
      case '+/-':
        return { total, next: data.next * -1, operation: data.operation };
      case '=':
        result = operate(data.total, data.next, data.operation);
        result.operation = null;
        return result;
      default:
        return operate(data.total, data.next, buttonName);
    }
  }

  return data;
};

export default calculate;
