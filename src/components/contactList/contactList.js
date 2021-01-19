import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
  if (items.length === 0) {
    return null;
  }

  const ContactItem = ({ id, name, number }) => {
    if (name === '' || number === '') {
      return null;
    }
    return (
      <li key={id} className={s.item}>
        {name}: {number}
        <button
          className={s.button}
          type="button"
          id={id}
          onClick={onDeleteContact}
        >
          Delete
        </button>{' '}
      </li>
    );
  };

  return <ul>{items.map(ContactItem)}</ul>;
};

ContactList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
