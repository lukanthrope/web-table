export const UPDATE_CELL = 'UPDATE_CELL';
export const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL';

export interface CellPayload {
  data: string;
  cell: string;
}

interface UpdateCellAction {
  type: typeof UPDATE_CELL;
  payload: CellPayload;
};

export interface ActiveCellPayload {
  activeCell: string; 
}

interface SetActiveCellAction {
  type: typeof SET_ACTIVE_CELL;
  payload: ActiveCellPayload;
};

export type TableActionTypes = UpdateCellAction | SetActiveCellAction;
