import { SET_CONTACTS } from './constants';
import { SET_FILTER } from './constants';
import { ADD_CONTACT } from './constants';
import { DELETE_CONTACT } from './constants';
import { FILTER_CONTACT } from './constants';
import { CLEAR_NAME } from './constants';
import { CLEAR_NUMBER } from './constants';
import { CLEAR_VALID_NAME } from './constants';
import { CLEAR_VALID_NUMBER } from './constants';
import { UPDATE_NAME } from './constants';
import { UPDATE_VALID_NAME } from './constants';
import { UPDATE_NUMBER } from './constants';
import { UPDATE_VALID_NUMBER } from './constants';
import { HANDLE_FILTER_INPUT } from './constants';
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts,
});
export const setFilter = filter => ({ type: SET_FILTER, filter });
export const addContact = newContact => ({
  type: ADD_CONTACT,
  newContact,
});
export const deleteContact = contactId => ({
  type: DELETE_CONTACT,
  contactId,
});
export const filterContact = filterValue => ({
  type: FILTER_CONTACT,
  filterValue,
});
export const clearName = () => ({ type: CLEAR_NAME });
export const clearNumber = () => ({ type: CLEAR_NUMBER });
export const clearValidName = () => ({ type: CLEAR_VALID_NAME });
export const clearValidNumber = () => ({ type: CLEAR_VALID_NUMBER });
export const updateName = newName => ({ type: UPDATE_NAME, newName });
export const updateValidName = isValidName => ({
  type: UPDATE_VALID_NAME,
  isValidName,
});
export const updateNumber = newNumber => ({
  type: UPDATE_NUMBER,
  newNumber,
});
export const updateValidNumber = isValidNumber => ({
  type: UPDATE_VALID_NUMBER,
  isValidNumber,
});

export const handleFilterInput = newFilter => ({
  type: HANDLE_FILTER_INPUT,
  newFilter,
});
