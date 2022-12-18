import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Form({ addToContactList }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();

    const id = nanoid(6);

    addToContactList({ id, name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onHandleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={onHandleChange}
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>
          Number
          <input
            value={number}
            onChange={onHandleChange}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </label>

      <button type="submit">add to contacts</button>
    </form>
  );
}

Form.propTypes = {
  addToContactList: PropTypes.func.isRequired,
};

export default Form;
