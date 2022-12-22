import ContactsList from './ContactsList/ContactsList';
import PhonebookForm from './Form/PhonebookForm';

export const App = () => {
  return (
    <div>
      <PhonebookForm />
      <hr />
      <ContactsList />
    </div>
  );
};
