export const UPDATE_CELL = 'UPDATE_CELL';
export const UPDATE_CELL_STYLE = 'UPDATE_CELL_STYLE';
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

export interface CellStylePayload {
  cell: string;
  param: string;
  value: string;
}

interface UpdateCellStyleAction {
  type: typeof UPDATE_CELL_STYLE;
  payload: CellStylePayload;
}

export type TableActionTypes = UpdateCellAction | SetActiveCellAction | UpdateCellStyleAction;
