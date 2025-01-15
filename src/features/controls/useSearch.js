import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, setSearch } from './controlsSlice';

const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (event) => {
    if (search || event.target.value.trim()) {
      dispatch(setSearch(event.target.value));
    }
  };

  return [search, handleSearch];
};

export default useSearch;
