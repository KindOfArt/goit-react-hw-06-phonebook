import Filter from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/contactsSlice';
import ContactsItem from './ContactsItem/ContactsItem';

const ContactsList = () => {
  const contacts = useSelector(getContactsList);

  return (
    <div>
      <Filter />
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ContactsList;
