import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../reducers';
import useCell from './useCell';

function useActiveCell() {
  const getActiveCell = (state: State) => state.get('activeCell');
  const activeCell = useSelector(getActiveCell);
  const [activeCellValue, setActiveCell] = useCell(activeCell);

  return {
    activeCell,
    setActiveCell,
    activeCellValue,
  }
}

export default useActiveCell;