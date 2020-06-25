import { ROWS } from './generateTable';
import { PartedString } from './stringUtils.types';

export function isDigit(c: string): boolean {
  if (c >= '0' && c <= '9')
    return true;

  return false;
}

export function countLetters(s: string): number {
  let count: number = 0;

  s.split('')
    .map((el: string) => !isDigit(el) && count++);

  return count;
}

export function incrementCellName(name: string): string {
  let nums: number = countLetters(name);
  let lets:string = name.substring(0, nums);
  let num: number = Number(name.substring(nums)) + 1;
  if (num > ROWS) num = 1;
  
  return `${lets}${num}`;
}

export function isBalanced (input: string): boolean {

  let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

export function getInnerString(toParse: string): PartedString {
  let start: number = -1;
  let end: number = -1;

  let mid: number = Math.floor(toParse.length / 2);
  for (let i: number = mid, j: number = mid; i < toParse.length, j >= 0; i++, j--) {
    if (toParse[i] === '(') {
      start = i;
      break;
    }
    if (toParse[j] === '(')  {
      start = j;
      break;
    }
  }
  
  let toFindRight: number = 0;
  for (let i: number = start + 1; i < toParse.length; i++) {
    if (toParse[i] === '(')
      toFindRight++;
    if (toParse[i] === ')') {
      if (toFindRight !== 0) {
        toFindRight--;
      } else {
        end = i;
        break;
      }
    }
  }

  let output = toParse.substring(start + 1, end);
  let rest = `${toParse.substring(0, start)}${toParse.substring(end + 1)}`

  return {
    output,
    rest,
  };
}

export const containesBrackets = (s: string): boolean => s.includes('(') && s.includes(')');

export function devideStrings(toParse: string): string[] {
  let todo: string[] = [];
  let temp: PartedString = getInnerString(toParse); 
  let rest: string = temp.rest;
  todo.push(temp.output);

  while(containesBrackets(rest)) {
    temp = getInnerString(rest);
    rest = temp.rest;
    todo.push(temp.output);
  }

  todo.push(rest);

  return todo;
}