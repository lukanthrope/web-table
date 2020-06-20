import { useSelector, useDispatch } from 'react-redux';

import { State } from '../reducers';
import { setCellStyle } from '../actions/table';

import { CellStyleHook, CellStyleHookResult } from './hook.types';

const useCell:CellStyleHook = (cellId: string): CellStyleHookResult => {
  const getTable = (state: State) => state.get('table')[cellId].style;
  const cellStyle = useSelector(getTable);
  const dispatch = useDispatch();

  const SetCellStyle = (param: string, value: string): void => {
    dispatch(setCellStyle({
      cell: cellId,
      param,
      value,
    }));
  };

  return [
    cellStyle,
    SetCellStyle,
  ]
}

export default useCell;