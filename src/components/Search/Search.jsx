import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { IoSearch } from 'react-icons/io5';
import { setSearch } from '../../features/searchSlice';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  cursor: default;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 350px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  width: 100%;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);

  &::-webkit-search-cancel-button:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Search = () => {
  const dispatch = useDispatch();
  const currentSearch = useSelector((state) => state.search.ui.currentSearch);

  const handleChange = (event) => {
    if (currentSearch || event.target.value.trim()) {
      dispatch(setSearch(event.target.value));
    }
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleChange} value={currentSearch} />
    </InputContainer>
  );
};

export default Search;
