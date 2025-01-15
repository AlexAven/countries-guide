import styled from 'styled-components';

import Search from './Search';
import Select from './Select';
import useRegion from './useRegion';

const optionsData = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsData);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = () => {
  const [region, handleSelect] = useRegion();

  return (
    <Wrapper>
      <Search />
      <Select
        options={options}
        placeholder="Filter by Region"
        isClearable // хз че это?
        isSearchable={false} // хз че это?
        value={optionsData[region]}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};

export default Controls;
