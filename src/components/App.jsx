import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './Contact-Book/ContactForm';
import { AppContainer, TitleContainer, ContentContainer } from './App.Styled';
import { Filter } from './Contact-Book/Filter';
import { ContactList } from './Contact-Book/ContactList';

import {
  PhoneBookContainer,
  PhoneBookTitle,
  PhoneBookContactTitle,
} from './Contact-Book/ContactBook.Styled';

import { getFilteredData } from 'helpers/getFilteredData';
import { toast } from 'react-toastify';
import { Phone, BookUser } from 'lucide-react';
import { isNameExists, isNumberExists } from './Contact-Book/ContactForm';

import {
  deleteContact,
  filterContact,
  setContacts,
  setFilter,
} from 'Redux/PhoneBook/actions';
import { selectContacts, selectFilter } from 'Redux/PhoneBook/selectors';
export const App = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    toast.success('Welcome to Contact Book');
    const storedContacts =
      JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    if (storedContacts && storedContacts.length > 0) {
      dispatch(setContacts(storedContacts));
    }

    const storedFilter =
      JSON.parse(window.localStorage.getItem('filter')) ?? [];
    if (storedFilter) {
      dispatch(setFilter(storedFilter));
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [contacts, filter]);

  const addContact = newContact => {
    if (isNameExists(contacts, newContact.name)) {
      toast.info('Contact with this name already exists');
    } else if (isNumberExists(contacts, newContact.number)) {
      toast.info('Contact with this number already exists');
    } else {
      dispatch(addContact(newContact));
      toast.success('Nice new contact is added');
    }
  };

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.warning('Contact is deleted');
  };
  const handleFilterChange = filterValue => {
    dispatch(filterContact(filterValue));
  };

  const filteredData = getFilteredData({ contacts, filter });

  return (
    <AppContainer>
      <TitleContainer>React homework template</TitleContainer>

      <ContentContainer>
        <PhoneBookContainer>
          <PhoneBookTitle>
            PhoneBook <Phone strokeWidth={1.5} />
          </PhoneBookTitle>

          <ContactForm
            addContact={addContact}
            isNameExists={isNameExists}
            isNumberExists={isNumberExists}
          />

          <PhoneBookContactTitle>
            Contacts <BookUser strokeWidth={1.5} />
          </PhoneBookContactTitle>

          <Filter setFilter={handleFilterChange} filter={filter} />

          <ContactList
            contacts={filteredData}
            filter={filter}
            onDeleteContact={handleContactDelete}
          />
        </PhoneBookContainer>
      </ContentContainer>
    </AppContainer>
  );
};
