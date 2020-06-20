import { 
  UPDATE_CELL, 
  SET_ACTIVE_CELL,
  UPDATE_CELL_STYLE,
  TableActionTypes, 
  CellPayload,
  ActiveCellPayload,
  CellStylePayload
} from './tableAction.types';

export const updateCell = (data: CellPayload): TableActionTypes => ({
  type: UPDATE_CELL,
  payload: data,
});

export const setActiveCell = (data: ActiveCellPayload): TableActionTypes => ({
  type: SET_ACTIVE_CELL,
  payload: data,
});

export const setCellStyle = (style: CellStylePayload): TableActionTypes => ({
  type: UPDATE_CELL_STYLE,
  payload: style,
});