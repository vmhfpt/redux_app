//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import rootReducer from './reducer';


export const store = createStore(rootReducer);
/*import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

