import { Map as IMap } from 'immutable';
import { generateTable } from '../utils/generateTable';
import { UPDATE_CELL, TableActionTypes } from '../actions/tableAction.types';

const table = generateTable();

const initialState = IMap({
  table
});

console.log(initialState.get('table'));

export type State = typeof initialState; 

export default function(state = initialState, action: TableActionTypes) {
  switch(action.type) {
    case UPDATE_CELL:
      return state.update('table', prev => {
        prev[action.payload.cell] = action.payload.data;
        return prev;
      });
    default:
      return state;
}
};