import * as ActionTypes from '../actionTypes';

// initial state, used for first pass
const INITIAL_STATE = { count: 0 };

// reducer
export const CountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};

// Import types to be used to prevent mistakes.

// Set up an initial state variable before your reducer to account for the first pass, when there is no previous state.

// Set up your reducer, it will take in 2 things, state and an action.

// Switch over the action.type to see what should go where.

// Have a different case for each type, and act accordingly. Your reducer should always return something.
