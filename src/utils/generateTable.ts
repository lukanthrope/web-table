export function generateTable() {
  const table: any = { };

  let letterCode: number = 64;
  let letter: string = '';

  for (let i = 1; i < 27; i++) {
    letterCode++;
    letter = String.fromCharCode(letterCode);
    for (let j = 1; j <= 100; j++) {
      table[`${letter}${j}`] = '';
    }
  }

  return table;
}