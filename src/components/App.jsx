import { useState } from 'react';
import Section from './Section/Section';
import Form from './Section/Form/Form';
import ContactsList from './Section/ContactsList/ContactsList';
import Filter from './Section/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';

const CONTACTS = 'contacts';

function App() {
  const [contacts, setContacts] = useLocalStorage(CONTACTS, []);
  const [filter, setFilter] = useState('');

  const addToContactList = newContact => {
    const { name: newName } = newContact;
    const normalizedNewName = newName.toLowerCase();

    !contacts.find(
      ({ name: prevName }) => prevName.toLowerCase() === normalizedNewName
    )
      ? setContacts(prev => [...prev, newContact])
      : alert(`${newName} is already in contacts`);
  };

  const filterContacts = e => setFilter(e.currentTarget.value);

  const findContact = () => {
    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(({ id }) => id !== contactId));

  const foundContact = findContact();

  return (
    <div>
      <Section title="Phonebook">
        <Form addToContactList={addToContactList} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter value={filter} onChange={filterContacts} />
            <ContactsList
              foundContact={foundContact}
              deleteContact={deleteContact}
            />
          </>
        )}
      </Section>
    </div>
  );
}

export default App;
