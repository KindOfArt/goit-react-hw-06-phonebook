import PropTypes from 'prop-types';

const Filter = props => {
  return (
    <label>
      Filter:
      <input
        {...props}
        type="text"
        name="filter"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  props: PropTypes.any,
};

export default Filter;
