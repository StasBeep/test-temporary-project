import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import StoryBook from '../pages/StoryBook';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/second" index element={<SecondPage />} />
      <Route path="/storybook" index element={<StoryBook /> } />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
