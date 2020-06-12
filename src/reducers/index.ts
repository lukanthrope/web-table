import { Map as IMap } from 'immutable';
import { generateTable } from '../utils/generateTable';
import { UPDATE_CELL, SET_ACTIVE_CELL, TableActionTypes } from '../actions/tableAction.types';

const table = generateTable();

const initialState = IMap({
  table,
  activeCell: "A1",
});

export type State = typeof initialState; 

export default function(state = initialState, action: TableActionTypes) {
  switch(action.type) {
    case UPDATE_CELL:
      return state.update('table', prev => {
        prev[action.payload.cell] = action.payload.data;
        return prev;
      });
    case SET_ACTIVE_CELL:
      return state.set('activeCell', action.payload.activeCell);
    default:
      return state;
}
};