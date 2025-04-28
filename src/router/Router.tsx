import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import BarCode from '../pages/BarCode';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/barcode" element={<BarCode />} />
    </Routes>
  );
};

export default Router;
