import * as ActionTypes from './actionTypes';

export const incrementCount = () => {
  return {
    type: ActionTypes.INCREMENT_COUNT
  };
};

// import all of your action types to prevent mistakes

// Declare any functions you might need, these are your action creators that return actions.

// Action creators are just functions. Actions are just javascript objects. Actions will always have a type, and will also have a payload if the action creator has a parameter.
