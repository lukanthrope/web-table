export const UPDATE_CELL = 'UPDATE_CELL';

export interface CellPayload {
  data: string;
  cell: string;
}

interface UpdateCellAction {
  type: typeof UPDATE_CELL;
  payload: CellPayload;
};

export type TableActionTypes = UpdateCellAction;
