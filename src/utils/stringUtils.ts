import { ROWS } from './generateTable';

export function isDigit(c: string): boolean {
  if (c >= '0' && c <= '9')
    return true;

  return false;
}

export function countLetters(s: string): number {
  let count: number = 0;

  s.split('')
    .map((el: string) => !isDigit(el) ? count++ : count);

  return count;
}

export function incrementCellName(name: string): string {
  let nums: number = countLetters(name);
  let lets:string = name.substring(0, nums);
  let num: number = Number(name.substring(nums)) + 1;
  if (num > 100) num = 1;
  
  return `${lets}${num}`;
}