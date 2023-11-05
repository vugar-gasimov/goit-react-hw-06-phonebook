const initialState = {
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
export const PhoneBkReducer = (state = initialState, action) => {
  switch (action.type) {
    // case value:
    //   break;

    default:
      return state;
  }
};
