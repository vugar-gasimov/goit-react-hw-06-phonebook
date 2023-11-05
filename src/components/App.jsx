import React, { useState, useEffect } from 'react';

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

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
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
  ]);

  useEffect(() => {
    toast.success('Welcome to Contact Book');
    const storedContacts =
      JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    if (storedContacts && storedContacts.length > 0) {
      setContacts(storedContacts);
    }
    const storedFilter =
      JSON.parse(window.localStorage.getItem('filter')) ?? [];
    if (storedFilter) {
      setFilter(storedFilter);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [contacts, filter]);

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
    toast.success('Nice new contact is added');
  };

  const isNameExists = name => {
    return contacts.some(contact => contact.name === name);
  };
  const isNumberExists = number => {
    return contacts.some(contact => contact.number === number);
  };
  const handleContactDelete = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    toast.warning('Contact is deleted');
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
