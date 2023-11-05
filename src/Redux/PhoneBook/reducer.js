import {
  SET_CONTACTS,
  SET_FILTER,
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  CLEAR_NAME,
  CLEAR_NUMBER,
  CLEAR_VALID_NAME,
  CLEAR_VALID_NUMBER,
  UPDATE_NAME,
  UPDATE_VALID_NAME,
  UPDATE_NUMBER,
  UPDATE_VALID_NUMBER,
  HANDLE_FILTER_INPUT,
} from './constants';
const initialState = {
  name: '',
  number: '',
  isNameValid: false,
  isNumberValid: false,
  filter: '',
  contacts: [
    { id: 'id-1', name: 'Vugar Gasimov', number: '684-02-29' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-6', name: 'Victor Brandon', number: '951-02-29' },
    { id: 'id-7', name: 'Claver Eline', number: '357-89-12' },
    { id: 'id-8', name: 'John Edison', number: '159-14-79' },
    { id: 'id-9', name: 'Rosie Copeland', number: '357-92-26' },
    { id: 'id-10', name: 'Anne Simpson', number: '753-12-56' },
  ],
};
export const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS: {
      return {
        ...state,
        contacts: action.contacts,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }

    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.newContact],
      };
    }
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.contactId
        ),
      };
    }
    case FILTER_CONTACT: {
      return {
        ...state,
        filter: action.filterValue,
      };
    }

    case CLEAR_NAME:
      return {
        ...state,
        name: '',
      };
    case CLEAR_NUMBER:
      return {
        ...state,
        number: '',
      };
    case CLEAR_VALID_NAME:
      return {
        ...state,
        isNameValid: false,
      };
    case CLEAR_VALID_NUMBER:
      return {
        ...state,
        isNumberValid: false,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_VALID_NAME:
      return {
        ...state,
        isNameValid: action.payload,
      };
    case UPDATE_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case UPDATE_VALID_NUMBER:
      return {
        ...state,
        isNumberValid: action.payload,
      };
    case HANDLE_FILTER_INPUT:
      return {
        ...state,
        filter: action.payload,
        // filter: action.newFilter,
      };
    default:
      return state;
  }
};
