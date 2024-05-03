// schoolReducer.js

import { ADD_SCHOOL } from '../constants/ActionTypes';

const initialState = {
  schools: [],
};

const SchoolReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHOOL:
      return {
        ...state,
        schools: [...state.schools, action.payload],
      };
    default:
      return state;
  }
};

export default SchoolReducers;
