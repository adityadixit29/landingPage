// schoolActions.js

import { ADD_SCHOOL } from '../constants/ActionTypes';

export const addSchool = (school) => {
  return {
    type: ADD_SCHOOL,
    payload: school,
  };
};
