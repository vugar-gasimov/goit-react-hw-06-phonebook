import { createStore } from 'redux';
import { phoneBookReducer } from './PhoneBook/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  phoneBookReducer,
  composeWithDevTools() // Using the redux devtools enhancer
);
