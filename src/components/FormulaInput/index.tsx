import React from 'react';
import './style.css';
import useActiveCell from '../../hooks/useActiveCell';

function FormulaInput() {
  const { setActiveCellValue, activeCellValue } = useActiveCell();

  return (
    <header>
      <span>fx</span>
      <input 
        value={activeCellValue} 
        onChange={setActiveCellValue} 
        data-testid="header-input"
        />
    </header>
  )
}

export default FormulaInput;