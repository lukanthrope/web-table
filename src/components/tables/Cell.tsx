import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../reducers';
import { updateCell } from '../../actions/table';

interface CellProps {
  key: string;
  cellId: string;
}

function Cell({ cellId }: CellProps) {
  const getTable = (state: State) => state.get('table')[cellId];
  const cellValue = useSelector(getTable);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(updateCell({
      cell: cellId,
      data: e.target.value,
    }));
  };

  return (
    <td>
      <input 
        value={cellValue} 
        onChange={handleChange}
        />
    </td>
  )
}

export default Cell;