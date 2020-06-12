import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers';
import { updateCell, setActiveCell } from '../../actions/table';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCell({
      cell: cellId,
      data: e.target.value,
    }));
  };

  const handleActiveCell = () => {
    dispatch(setActiveCell({
      activeCell: cellId,
    }));
  }

  return (
    <td id={activeCell === cellId ? 'active-cell' : ''}>
      <input 
        value={cellValue} 
        onChange={handleChange}
        onClick={handleActiveCell}
        />
    </td>
  )
}

export default Cell;