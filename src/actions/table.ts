import { 
  UPDATE_CELL, 
  SET_ACTIVE_CELL,
  TableActionTypes, 
  CellPayload,
  ActiveCellPayload
} from './tableAction.types';

export const updateCell = (data: CellPayload): TableActionTypes => ({
  type: UPDATE_CELL,
  payload: data,
});

export const setActiveCell = (data: ActiveCellPayload): TableActionTypes => ({
  type: SET_ACTIVE_CELL,
  payload: data,
});
