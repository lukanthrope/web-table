import React, { 
  useRef, 
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
 
import { setActiveCell } from '../../actions/table';
import { incrementCellName } from '../../utils/stringUtils';

import useActiveCell from '../../hooks/useActiveCell';
import useCell from '../../hooks/useCell';

interface CellProps {
  key: string;
  cellId: string;
}

function Cell({ cellId }: CellProps) {
  const dispatch = useDispatch();
  const thisRef = useRef<HTMLInputElement>(null);
  const { activeCell } = useActiveCell();
  const [cellValue, setCellValue] = useCell(cellId);

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === 'Enter' && incrementActiveCell();
    e.key === 'Tab' && incrementActiveCell();
  }
  const delayedKeyDown = debounce(keyDown, 500);

  useEffect(() => {
    if (activeCell === cellId) 
      thisRef.current?.focus();
  }, [activeCell, cellId]);

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
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.persist();
      e.preventDefault();

      delayedKeyDown(e);
    }
  };

  return (
    <td id={activeCell === cellId ? 'active-cell' : ''}>
      <input 
        value={cellValue} 
        onChange={setCellValue}
        onClick={handleActiveCell}
        onKeyDown={handleKeyPress}
        ref={thisRef}
        data-testid={cellId}
        />
    </td>
  )
}

export default Cell;