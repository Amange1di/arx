import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import {
  HomePage,
  AboutAcademyPage,
  GuidePage,
  EducationPage,
  SciencePage,
  ActivityPage,
  StudentsPage,
  ApplicantsPage, 
  GalleryPage
} from "../../pages";
  

import { Footer, Header, } from '../../widgets';

const routesArr = [
  { path: '/', element: <HomePage /> },
  { path: '/about-academy', element: <AboutAcademyPage /> },
  { path: '/guide', element: <GuidePage /> },
  { path: '/education', element: <EducationPage /> },
  { path: '/science', element: <SciencePage /> },
  { path: '/activity', element: <ActivityPage /> },
  { path: '/students', element: <StudentsPage /> },
  { path: '/applicants', element: <ApplicantsPage /> },
  { path: '/gallery', element: <GalleryPage /> },
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
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
