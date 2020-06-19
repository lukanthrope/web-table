export const COLS = 27;
export const ROWS = 100;

export function generateTable() {
  const table: any = { };

  let letterCode: number = 64;
  let letter: string = '';

  for (let i: number = 1; i < COLS; i++) {
    letterCode++;
    letter = String.fromCharCode(letterCode);
    for (let j: number = 1; j <= ROWS; j++) {
      table[`${letter}${j}`] = {
        value: '',
        style: {
          background: 'white',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          color: 'black',
        }
      };
    }
  }

  return table;
}