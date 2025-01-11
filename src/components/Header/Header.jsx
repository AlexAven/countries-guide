import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from '../Container/Container';
import { setTheme } from '../../features/themeSlice';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.ui.currentTheme) || 'light';

  const handleThemeChange = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={handleThemeChange}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}
            <span style={{ marginLeft: '10px' }}>{theme} mode</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
