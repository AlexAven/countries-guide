import styled from 'styled-components';

const Status = styled.h2`
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const LoadBar = () => <Status>Загрузка...</Status>;

export default LoadBar;
