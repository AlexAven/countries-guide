import styled from 'styled-components';

import Search from './Search';
import Select from './Select';
import useRegion from './useRegion';

const optionsData = {
  Africa: { value: 'Africa', label: 'Африка' },
  America: { value: 'America', label: 'Америка' },
  Asia: { value: 'Asia', label: 'Азия' },
  Europe: { value: 'Europe', label: 'Европа' },
  Oceania: { value: 'Oceania', label: 'Океания' },
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
        placeholder="Выбор региона"
        isClearable
        isSearchable={false}
        value={optionsData[region] || ''}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};

export default Controls;
