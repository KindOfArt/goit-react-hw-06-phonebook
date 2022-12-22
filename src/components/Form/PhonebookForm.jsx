import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact, getContactsList } from 'redux/contactsSlice';
import { useSelector } from '../../../node_modules/react-redux/es/exports';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const onHandleSubmit = ({ name: newName, number }, { resetForm }) => {
    !contacts.find(({ name }) => name === newName)
      ? dispatch(addContact(newName, number))
      : alert('Already have this contact!');

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={onHandleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              id="name"
              name="name"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="enter name..."
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="number">Number:</label>
            <Field
              type="number"
              id="number"
              name="number"
              autoComplete="off"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="enter number..."
              required
            />
          </div>
          <br />
          <button type="submit">Add to contacts</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PhonebookForm;
