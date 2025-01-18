import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../components/Container';

const Title = styled.h1`
  font-size: 2.5rem;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLink = styled(Link).attrs({
  to: '/',
})`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 8rem;

  color: var(--color-text);
  cursor: pointer;

  &:hover {
    position: relative;
    bottom: 2px;
    right: 2px;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Title>Ой, такой страницы не существует...</Title>
        <MainLink>На главную</MainLink>
      </Container>
    </>
  );
};

export default NotFoundPage;
