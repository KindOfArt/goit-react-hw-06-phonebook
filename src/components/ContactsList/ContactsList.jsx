import { useMemo } from 'react';
import { useSelector } from '../../../node_modules/react-redux/es/exports';
import { getContactsList } from 'redux/contactsSlice';
import { getFilterFieldValue } from 'redux/filterSlice';
import Filter from 'components/Filter/Filter';
import ContactsItem from './ContactsItem/ContactsItem';

const ContactsList = () => {
  const contactsList = useSelector(getContactsList);
  const filterValue = useSelector(getFilterFieldValue);

  const filteredList = useMemo(
    () =>
      contactsList.filter(({ name }) => {
        let normalizedFilter = '';
        if (filterValue) {
          normalizedFilter = filterValue.toLowerCase();
        }
        return name.toLowerCase().includes(normalizedFilter);
      }),
    [contactsList, filterValue]
  );

  return (
    <div>
      <Filter />
      {filteredList.length > 0 ? (
        <ul>
          {filteredList.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ContactsList;
