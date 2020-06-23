import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducers';
import { useActiveCell } from '../../hooks';
import parcer from '../../parser';

function FormulaInput() {
  const { setActiveCellValue, activeCellValue } = useActiveCell();
  const getAllCells = (state: State) => state.get('table');
  const table = useSelector(getAllCells);

  const calculate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let newStr = activeCellValue.toLowerCase();
      for (let key in table) {
        let k = key.toLowerCase();

        if (newStr.includes(k)) 
          newStr = newStr.replace(new RegExp(k, "g"), table[key].value);
      }
      setActiveCellValue(parcer(newStr));
    }
  }

  return (
    <div>
      <span>fx</span>
      <input 
        value={activeCellValue} 
        onChange={e => setActiveCellValue(e.target.value)} 
        data-testid="header-input"
        onKeyDown={calculate}
        />
    </div>
  )
}

export default FormulaInput;