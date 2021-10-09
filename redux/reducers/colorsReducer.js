import * as ActionTypes from '../actionTypes';

// initial state, used for first pass
const INITIAL_STATE = {
  squareBgColor: 'lightgreen',
  nicksFavColor: 'purple',
  hardOnTheEyeColor: 'red'
};

// reducer
export const ColorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR:
      return { ...state, squareBgColor: action.payload };

    default:
      return state;
  }
};
