import Section from './Section/Section';
import Form from './Section/Form/Form';
import ContactsList from './Section/ContactsList/ContactsList';
import Filter from './Section/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  filterChange,
  getContactsList,
  getFilterFieldValue,
} from 'redux/contactsSlice';

function App() {
  const contacts = useSelector(getContactsList);
  const filterField = useSelector(getFilterFieldValue);
  const dispatch = useDispatch();

  const addToContactList = newContact => {
    const { name: newName } = newContact;
    const normalizedNewName = newName.toLowerCase();

    !contacts.find(
      ({ name: prevName }) => prevName.toLowerCase() === normalizedNewName
    )
      ? dispatch(addContact(newContact))
      : alert(`${newName} is already in contacts`);
  };

  const findContact = () => {
    const normalizedFilterFieldValue = filterField.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterFieldValue)
    );
  };

  const foundContacts = findContact();

  return (
    <div>
      <Section title="Phonebook">
        <Form addToContactList={addToContactList} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter
              value={filterField}
              onChange={e => dispatch(filterChange(e.currentTarget.value))}
            />
            <ContactsList foundContacts={foundContacts} />
          </>
        )}
      </Section>
    </div>
  );
}

export default App;
