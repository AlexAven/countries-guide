import Controls from '../../features/controls/Controls';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';

const MainPage = () => {
  return (
    <>
      <Controls />
      <List>
        <Card />
      </List>
    </>
  );
};

export default MainPage;
