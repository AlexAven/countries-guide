import Info from './Info';
import useDetails from './useDetails';
import LoadBar from '../../components/LoadBar';

const CountryDetails = ({ name = '' }) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === 'loading' && <LoadBar />}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
