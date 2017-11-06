import { combineReducers } from 'redux';
import initalList from '../../data/hotels.js';
import { SORT_HOTELS } from './actions'

function hotels(state = initalList , action){
  switch (action.type){
    case SORT_HOTELS:
    let dir = action.dir === 'Asc' ? 1 : -1;
    let newState = state.slice(0).sort((a,b) => {
      if (a[action.field] > b[action.field]) {
        return dir;
      }
      return dir*-1;
    });
    return newState;
    default:
      return state
  }
}

const hotelsReducers = combineReducers({
  hotels,
})

export default hotelsReducers