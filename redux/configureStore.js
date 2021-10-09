import { createStore, combineReducers } from 'redux';
import { NumbersReducer } from './reducers/numbersReducer';
import { ColorsReducer } from './reducers/colorsReducer';

export const ConfigureStore = () => {
  const rootReducer = combineReducers({
    numbers: NumbersReducer,
    colors: ColorsReducer
  });

  const store = createStore(rootReducer);

  return store;
};

// Create a function that will configure the store.

// Create a rootReducer which merges all of the reducers in your app. Map each reducer to a key on the root reducer, the naming should be similar to the reducer.

// Create a variable which will become your data store. Its value will be equal to whatever the createStore function kicks back when supplied with the rootReducer you made previously.

// Return your variable that you made in the previous step, this is what your ConfigureStore function will return when used elsewhere.
