import { useNavigate } from 'react-router-dom';

import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import LoadBar from '../../components/LoadBar';
import useCountries from './useCountries';

const CountryList = () => {
  const navigate = useNavigate();

  const [countries, status, error] = useCountries();

  return (
    <>
      {error && <h2>Cannot fetch data</h2>}
      {status === 'loading' && <LoadBar />}
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
