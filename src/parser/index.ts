import { devideStrings, isBalanced } from '../utils/stringUtils';

const isAction = (s: string): boolean => s === '+' || s === '-' || s === '*' || s === '/';

function actions(action: string, num1: number, num2: number): number {
  switch(action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return num1 * num2;
  }
}

function excecute(toParse: string): string {
  let s: string = toParse.trim();
  let arr: string[] = devideStrings(s);

  if (!isBalanced(s)) return 'Syntax error';
  console.log(arr)
  let result: number = 0;
  let tempStr: string = '';
  let tempStr2: string = '';
  let action: string = '';

  for(let j: number = 0; j < arr.length; j++ ) {
    let toParse: string = arr[j];
    let len = toParse.length - 1;
    console.log(toParse[len])
    if (isAction(toParse[len])) {
      toParse = `${toParse[len]}${toParse.substring(0, len)}`;
    }
    tempStr = result.toString();
    console.log(toParse)
    for (let i: number = 0; i < toParse.length; i++) {
      console.log(action)
      if (i === toParse.length - 1) {
        if (!isNaN(Number(tempStr2 + toParse[i])) && !isNaN(Number(tempStr)) && action !== '') {
          result = actions(action, Number(tempStr), Number(tempStr2 + toParse[i]));
          tempStr = result.toString();
          tempStr2 = '';
        }
      } else if (!isNaN(Number(tempStr + toParse[i])) && action === '') {
        tempStr += toParse[i];
      } else if (!isNaN(Number(tempStr2 + toParse[i])) && action !== '') {
        tempStr2 += toParse[i];
      } else if (isAction(toParse[i])) {
        if (!isNaN(Number(tempStr2)) && !isNaN(Number(tempStr)) && action !== '') {
          result = actions(action, Number(tempStr), Number(tempStr2));
          tempStr = result.toString();
          tempStr2 = '';
        }
        action = toParse[i];
      }
    }
  }

  return result.toString();
}

export default excecute;