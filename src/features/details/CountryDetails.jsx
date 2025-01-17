import Info from './Info';
import useDetails from './useDetails';
import LoadBar from '../../components/LoadBar';

const CountryDetails = ({ name = '', navigate }) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === 'loading' && <LoadBar />}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
