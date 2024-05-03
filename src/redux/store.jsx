// store.js

import { createStore, combineReducers } from 'redux';
import SchoolReducers from "./reducers/SchoolReducers";

const rootReducer = combineReducers({
  school: SchoolReducers,
});

const store = createStore(rootReducer);

export default store;
