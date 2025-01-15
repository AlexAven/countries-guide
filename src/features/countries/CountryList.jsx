import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import useCountries from './useCountries';

const Status = styled.h2`
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CountryList = () => {
  const navigate = useNavigate();

  const [countries, status, error] = useCountries();

  return (
    <>
      {error && <h2>Cannot fetch data</h2>}
      {status === 'loading' && <Status>Загрузка...</Status>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Население',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Регион',
                  description: c.region,
                },
                {
                  title: 'Столица',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
            );
          })}
        </List>
      )}
    </>
  );
};

export default CountryList;
