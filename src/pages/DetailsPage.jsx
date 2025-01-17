import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import Button from '../components/Button';
import CountryDetails from '../features/details/CountryDetails';

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Назад
      </Button>
      <CountryDetails name={id} navigate={navigate} />
    </div>
  );
};

export default DetailsPage;
