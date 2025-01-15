import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';
import useSearch from './useSearch';

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
  placeholder: 'Найти страну...',
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
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};

export default Search;
