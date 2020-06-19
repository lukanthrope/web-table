import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers';
import { updateCell } from '../../actions/table';

function FormulaInput() {
  const getActiveCell = (state: State) => state.get('activeCell');
  const activeCell = useSelector(getActiveCell);
  const getCellValue = (state: State) => state.get('table')[activeCell].value;
  const cellValue = useSelector(getCellValue);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateCell({
      cell: activeCell,
      data: e.target.value,
    }));
  };

  return (
    <header>
      <span>fx</span>
      <input 
        value={cellValue} 
        onChange={handleChange} 
        data-testid="header-input"
        />
    </header>
  )
}

export default FormulaInput;