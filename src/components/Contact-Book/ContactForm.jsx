import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
  PhoneBookButton,
} from './ContactBook.Styled';

import { toast } from 'react-toastify';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  const handleNewContacts = e => {
    e.preventDefault();
    if (isNameValid && isNumberValid) {
      if (props.isNameExists(name)) {
        toast.info('Sorry you already have this name in the phonebook. 😅');
      } else if (props.isNumberExists(number)) {
        toast.info('Sorry you already have this number in the phonebook.😉');
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        props.addContact(newContact);

        setName('');
        setNumber('');
        setIsNameValid(false);
        setIsNumberValid(false);
      }
    }
  };
  const handleNewName = e => {
    const newName = e.target.value.trim();
    const isValidName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
        newName
      );
    setName(newName);
    setIsNameValid(isValidName);
  };
  const handleNewNumber = e => {
    const newNumber = e.target.value.trim();
    const isValidNumber =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        newNumber
      );
    setNumber(newNumber);
    setIsNumberValid(isValidNumber);
  };

  return (
    <PhoneBookInputContainer>
      <PhoneBookInputLabel>Name: </PhoneBookInputLabel>
      <PhoneBookInput
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={name}
        placeholder="Add new name..."
        onChange={handleNewName}
      />
      <PhoneBookInputLabel>Number: </PhoneBookInputLabel>
      <PhoneBookInput
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        placeholder="Add new number..."
        onChange={handleNewNumber}
      />
      <PhoneBookButton
        onClick={handleNewContacts}
        disabled={!isNameValid || !isNumberValid}
      >
        Add contact
      </PhoneBookButton>
    </PhoneBookInputContainer>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  isNameExists: PropTypes.func.isRequired,
  isNumberExists: PropTypes.func.isRequired,
};
