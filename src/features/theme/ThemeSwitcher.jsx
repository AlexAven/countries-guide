import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import useTheme from './useTheme';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
      <span style={{ marginLeft: '10px' }}>{theme} mode</span>
    </ModeSwitcher>
  );
};

export default ThemeSwitcher;
