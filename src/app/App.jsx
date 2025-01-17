import { Routes, Route } from 'react-router-dom';

import '../styles/reset.css';
import '../styles/vars.css';
import Layout from '../components/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="country/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
