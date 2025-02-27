import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import useNeighbors from './useNeighbors';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-bold);
  font-size: 1.5rem;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const navigate = useNavigate();
  const neighbors = useNeighbors(borders);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Оригинальное название:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Население:</b> {population}
            </ListItem>
            <ListItem>
              <b>Регион:</b> {region}
            </ListItem>
            <ListItem>
              <b>Подрегион:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Столица:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Домен:</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Валюта:</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Язык:</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name} </span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Соседи:</b>
          {!borders.length ? (
            <span>не граничит ни с одной страной</span>
          ) : (
            <TagGroup>
              {neighbors.map((b) => (
                <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                  {b}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
