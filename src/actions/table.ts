import { UPDATE_CELL, TableActionTypes, CellPayload } from './tableAction.types';

export const  updateCell = (data: CellPayload): TableActionTypes => ({
  type: UPDATE_CELL,
  payload: data,
});