import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
