import React from 'react';
import './style.css';
import useActiveCell from '../../hooks/useActiveCell';

function FormulaInput() {
  const { setActiveCell, activeCellValue } = useActiveCell();

  return (
    <header>
      <span>fx</span>
      <input 
        value={activeCellValue} 
        onChange={setActiveCell} 
        data-testid="header-input"
        />
    </header>
  )
}

export default FormulaInput;