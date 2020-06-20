import React from 'react';
import { useActiveCell } from '../../hooks';

function FormulaInput() {
  const { setActiveCellValue, activeCellValue } = useActiveCell();

  return (
    <div>
      <span>fx</span>
      <input 
        value={activeCellValue} 
        onChange={setActiveCellValue} 
        data-testid="header-input"
        />
    </div>
  )
}

export default FormulaInput;