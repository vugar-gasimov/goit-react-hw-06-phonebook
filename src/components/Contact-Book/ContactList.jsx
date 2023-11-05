import React from 'react';
import {
  PhoneBookInputContainer,
  PhoneBookContactList,
  ListItemContainer,
  DeleteButton,
} from './ContactBook.Styled';
import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';
import { getFilteredData } from 'helpers/getFilteredData';

export const ContactList = props => {
  const handleDeleteClick = contactId => {
    props.onDeleteContact(contactId);
  };
  const { contacts, filter } = props;
  const filteredData = getFilteredData({ contacts, filter });
  return (
    <PhoneBookInputContainer>
      Contact List
      <PhoneBookContactList>
        {filteredData.map(contact => {
          if (contact.number !== undefined) {
            return (
              <ListItemContainer key={contact.id}>
                <ContactListItem contact={contact} />
                <DeleteButton onClick={() => handleDeleteClick(contact.id)}>
                  Delete
                </DeleteButton>
              </ListItemContainer>
            );
          }
          return null;
        })}
      </PhoneBookContactList>
    </PhoneBookInputContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
