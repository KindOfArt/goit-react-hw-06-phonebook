import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = ({ foundContacts }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {foundContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  foundContacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default ContactsList;
