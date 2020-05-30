import { Map as IMap } from 'immutable';
import { generateTable } from '../utils/generateTable';

const table = generateTable();

const initialState = IMap({
    table
});

export default function(state = initialState, action: any) {
  switch(action.type) {

    default:
      return {
        ...state,
      };
}
};