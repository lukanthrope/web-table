import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers';
import { updateCell, setActiveCell } from '../../actions/table';
import { incrementCellName } from '../../utils/stringUtils';

interface CellProps {
  key: string;
  cellId: string;
}

function Cell({ cellId }: CellProps) {
  const getTable = (state: State) => state.get('table')[cellId];
  const getActiveCell = (state: State) => state.get('activeCell');
  const activeCell = useSelector(getActiveCell);
  const cellValue = useSelector(getTable);
  const dispatch = useDispatch();
  const thisRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeCell === cellId) 
      thisRef.current?.focus();
  }, [activeCell, cellId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateCell({
      cell: cellId,
      data: e.target.value,
    }));
  };

  const handleActiveCell = (): void => {
    dispatch(setActiveCell({
      activeCell: cellId,
    }));
  };

  const incrementActiveCell = (): void => {
    dispatch(setActiveCell({
      activeCell: incrementCellName(activeCell),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === 'Enter' && incrementActiveCell();
    e.key === 'Tab' && incrementActiveCell();
  };

  return (
    <td id={activeCell === cellId ? 'active-cell' : ''}>
      <input 
        value={cellValue} 
        onChange={handleChange}
        onClick={handleActiveCell}
        onKeyDown={handleKeyPress}
        ref={thisRef}
        data-testid={cellId}
        />
    </td>
  )
}

export default Cell;