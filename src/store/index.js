import { createStore } from 'redux'
import hotels from './hotel/reducers';
let store = createStore(hotels,);
export default store;