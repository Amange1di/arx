import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/visualy.scss';
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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useVisually } from '../redux/slices/visually';
import { VisuallyImpaired } from '../../entities';

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

  const { font, theme, letterSpacing, lineSpacing, fontSize, picture } = useVisually();
  
  useEffect(() => {
    const body = document.body;
    if (!body) return;

    const themeClasses = ["dark", "light", "brown", "green", "blue"];
    const letterSpacingClasses = [
      "letter__normal",
      "letter__average",
      "letter__big",
    ];
    const lineHeightClasses = ["lineH__normal", "lineH__normal", "lineH__big"];
    const fontsClasses = ["serif", "sans-serif"];
    const fontSizeClasses = [
      "fontSize-2",
      "fontSize-4",
      "fontSize-6",
      "fontSize-8",
      "fontSize-10",
      "fontSize-12",
      "fontSize-14",
      "fontSize-16",
      "fontSize-18",
      "fontSize-20",
      "fontSize-22",
      "fontSize-24",
      "fontSize-26",
    ];
    const imagesClass = ["image__show", "image__hide", "image__dark"];


    body.classList.remove(
      ...themeClasses,
      ...letterSpacingClasses,
      ...lineHeightClasses,
      ...fontsClasses,
      ...fontSizeClasses,
      ...imagesClass
    );
    body.classList.add(
      theme,
      letterSpacing,
      lineSpacing,
      font,
      `fontSize-${fontSize}`,
      picture
    );

    return () => {
      body.classList.remove(
        theme,
        letterSpacing,
        lineSpacing,
        font,
        `fontSize-${fontSize}`,
        picture
      );
    };
  }, [theme, letterSpacing, lineSpacing, font, fontSize, picture]);

  // Синтез речи
  const { speech, active } = useSelector((state) => state.visually);    

  const readPageContent = () => {
    const content = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = "ru-RU";
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const mainTextSpeech = (text) => {
        const talk = new SpeechSynthesisUtterance();
        talk.lang = 'ru-RU';
        talk.text = text;
        window.speechSynthesis.speak(talk);
    };


  useEffect(() => {
    if (speech) {
      readPageContent();
    } else {
      stopSpeech();
    }
  }, [speech]);
  //
  return (
    <BrowserRouter>
      {active && <VisuallyImpaired mainTextSpeech={mainTextSpeech} />}
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
