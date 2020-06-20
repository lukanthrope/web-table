import { useSelector } from 'react-redux';
import { State } from '../reducers';
import useCell from './useCell';

import { ActiveCellHook, ActiveCellHookResult, SetCellValue } from './hook.types';

const useActiveCell: ActiveCellHook = ():ActiveCellHookResult => {
  const getActiveCell = (state: State) => state.get('activeCell');
  const activeCell = useSelector(getActiveCell);
  const [activeCellValue, setActiveCellValue] = useCell(activeCell);

  return {
    activeCell,
    setActiveCellValue: setActiveCellValue as SetCellValue,
    activeCellValue: activeCellValue as string,
  }
}

export default useActiveCell;