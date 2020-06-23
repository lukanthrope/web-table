import React from 'react';
import { useActiveCell } from '../../hooks';
import parcer from '../../parser';

function FormulaInput() {
  const { setActiveCellValue, activeCellValue } = useActiveCell();

  const calculate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setActiveCellValue(parcer(activeCellValue).toString());
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