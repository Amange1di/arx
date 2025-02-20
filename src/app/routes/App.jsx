import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import {
  HomePage, Awards

} from '../../pages';
import { Footer, Header, } from '../../widgets';

const routesArr = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/awards',
    element: <Awards />
  },

];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
