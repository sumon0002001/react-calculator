import Operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next } = calculator;
  const { operation } = calculator;
  if (buttonName === '+/-') {
      total *= -1;
      
  }

}