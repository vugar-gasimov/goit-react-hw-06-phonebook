import React from 'react';
import PropTypes from 'prop-types';
import {
  PhoneBookInputContainer,
  PhoneBookInputLabel,
  PhoneBookInput,
} from './ContactBook.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterInput } from 'Redux/PhoneBook/actions';
import { selectFilter } from 'Redux/PhoneBook/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    dispatch(handleFilterInput(newFilter));
  };
  return (
    <PhoneBookInputContainer>
      <PhoneBookInputLabel>You can filter contacts here: </PhoneBookInputLabel>
      <PhoneBookInput
        value={filter}
        placeholder="Feel free to filter contacts..."
        onChange={handleFilterChange}
        name="filter"
        title="Filtering contact list by name or number."
      />
    </PhoneBookInputContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
