import { getFilterFieldValue, setFilterValue } from 'redux/filterSlice';
import {
  useDispatch,
  useSelector,
} from '../../../node_modules/react-redux/es/exports';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterFieldValue);

  const filterChange = e => dispatch(setFilterValue(e.currentTarget.value));

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        name="filter"
        id="filter"
        autoComplete="off"
        placeholder="start entering name..."
        value={filterValue}
        onChange={filterChange}
      />
    </div>
  );
};

export default Filter;
