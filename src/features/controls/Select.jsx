import Select from 'react-select';
import styled from 'styled-components';

const SelectCustom = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      borderRadius: 'var(--radii)',
      boxShadow: 'var(--shadow)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }

  & * svg:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default SelectCustom;
