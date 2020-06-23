import { useSelector, useDispatch } from 'react-redux';

import { State } from '../reducers';
import { updateCell } from '../actions/table';

import { CellHook, CellHookResult } from './hook.types';

const useCell:CellHook = (cellId: string): CellHookResult => {
  const getTable = (state: State) => state.get('table')[cellId].value;
  const cellValue = useSelector(getTable);
  const dispatch = useDispatch();

  const setCellValue = (e: string): void => {
    dispatch(updateCell({
      cell: cellId,
      data: e,
    }));
  };

  return [
    cellValue,
    setCellValue,
  ]
}

export default useCell;