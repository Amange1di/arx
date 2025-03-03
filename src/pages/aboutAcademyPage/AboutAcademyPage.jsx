// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';
// import { AwardsCard, Navigations } from '../../features';
// import { AboutDocument,AboutTexts, AboutCarousel , AboutNavigate, ActivetyBaner } from '../../widgets';

// export const AboutAcademyPage = () => {
//   const dispatch = useDispatch();
//   const { navElements, selected, selectedSub, page, } = useSelector(state => state.nav);

//   useEffect(() => {
//     dispatch(fetchPageData('aboutacademy'));
//   }, [dispatch]);

//   const [itemsHeaderAbout] = useState([
//       {    
//           id: 1,
//           title: 'Исламская академия: освещая путь знаний и духовного роста.'
//       }
//   ]);

//   const [itemsBodyAbout] = useState([
//       {
//           id: 1,
//           title: 'Факультет исламского права (фикх)',
//           description: 'Факультет предоставляет знания в области исламского права, правовых систем и судебных практик в странах с исламской традицией. Студенты изучают основы исламского права, семейное право в исламе, а также гражданское и уголовное право в исламском контексте. По завершении программы выпускники получают квалификацию правоведа или юриста в исламских странах. Этот факультет предлагает курсы по арабскому языку для всех уровней, от начального до среднего, а также изучение арабской литературы и культуры. Программы включают классическую арабскую литературу, а также знакомят студентов с арабской культурой и традициями. Выпускники могут стать переводчиками или преподавателями арабского языка. Факультет направлен на углубленное изучение исламской теологии, философии и религиозных учений. Студенты изучают основы исламской акъиды (теологии), исламскую философию и логику, а также мистицизм и суфизм. Выпускники получают квалификацию исламского теолога, философа или проповедника. Этот факультет обучает основам педагогики и методике преподавания исламских дисциплин. В рамках программы студенты осваивают педагогические методы с исламским уклоном, изучают воспитание и этику в исламе. По завершении программы выпускники становятся преподавателями или воспитателями в исламских образовательных учреждениях.'
//       }
//   ]);

//   const [itemsNavigateAbout] = useState([
//       {
//           id: 1,
//           name: 'Телефон номер',
//           property: '+996704589591'
//       },
//       {
//           id: 2,
//           name: 'Адрес',
//           property: 'г.Бишкек-ул. А.Юнусова 134'
//       },
//       {
//           id: 3,
//           name: 'Режим работы',
//           property: 'Пн-Сб | 10:00-22:00'
//       }
//   ]);

//   const [itemsCouruselAbout] = useState([
//         {
//             id: 1,
//             image: 'https://s3-alpha-sig.figma.com/img/039f/f383/e554a39a5ba10833e2875522083a993c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn6GygJxVjJ2dzYf1IHXocuZsq4t1ogRwZvGgnca3sgIwpxTcN53n1hD3CCJ6Odnvt5mOCOfaom8NVIAnejcsC9ufu-Z2wlz367CASU2XzkFR3u9FwOj07gk~~yyyF5jMeHCx1GsBS~fe-kQQmkylxZot2hC4GQjHRx~T839LrASmFD3-wvf4dazR2Su3orSb2HKU4ja70HiZh2-cp1DHa7NUl7YcxtO1QPSn5yggPANg3iP4H~wrQKWptfQ7jp5ZcN1BwaUJf7~tT32IUP47gi87CFC~2K0q5eY~vx022GRtQkaPKsv5~GNUBlXJV0FB7VrstmCkJXqSZU8Pebtiw__'
//         },
//         {
//             id: 2,
//             image: 'https://s3-alpha-sig.figma.com/img/039f/f383/e554a39a5ba10833e2875522083a993c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn6GygJxVjJ2dzYf1IHXocuZsq4t1ogRwZvGgnca3sgIwpxTcN53n1hD3CCJ6Odnvt5mOCOfaom8NVIAnejcsC9ufu-Z2wlz367CASU2XzkFR3u9FwOj07gk~~yyyF5jMeHCx1GsBS~fe-kQQmkylxZot2hC4GQjHRx~T839LrASmFD3-wvf4dazR2Su3orSb2HKU4ja70HiZh2-cp1DHa7NUl7YcxtO1QPSn5yggPANg3iP4H~wrQKWptfQ7jp5ZcN1BwaUJf7~tT32IUP47gi87CFC~2K0q5eY~vx022GRtQkaPKsv5~GNUBlXJV0FB7VrstmCkJXqSZU8Pebtiw__'
//         },
//         {
//             id: 3,
//             image: 'https://s3-alpha-sig.figma.com/img/039f/f383/e554a39a5ba10833e2875522083a993c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn6GygJxVjJ2dzYf1IHXocuZsq4t1ogRwZvGgnca3sgIwpxTcN53n1hD3CCJ6Odnvt5mOCOfaom8NVIAnejcsC9ufu-Z2wlz367CASU2XzkFR3u9FwOj07gk~~yyyF5jMeHCx1GsBS~fe-kQQmkylxZot2hC4GQjHRx~T839LrASmFD3-wvf4dazR2Su3orSb2HKU4ja70HiZh2-cp1DHa7NUl7YcxtO1QPSn5yggPANg3iP4H~wrQKWptfQ7jp5ZcN1BwaUJf7~tT32IUP47gi87CFC~2K0q5eY~vx022GRtQkaPKsv5~GNUBlXJV0FB7VrstmCkJXqSZU8Pebtiw__'
//         },
//         {
//             id: 4,
//             image: 'https://s3-alpha-sig.figma.com/img/039f/f383/e554a39a5ba10833e2875522083a993c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn6GygJxVjJ2dzYf1IHXocuZsq4t1ogRwZvGgnca3sgIwpxTcN53n1hD3CCJ6Odnvt5mOCOfaom8NVIAnejcsC9ufu-Z2wlz367CASU2XzkFR3u9FwOj07gk~~yyyF5jMeHCx1GsBS~fe-kQQmkylxZot2hC4GQjHRx~T839LrASmFD3-wvf4dazR2Su3orSb2HKU4ja70HiZh2-cp1DHa7NUl7YcxtO1QPSn5yggPANg3iP4H~wrQKWptfQ7jp5ZcN1BwaUJf7~tT32IUP47gi87CFC~2K0q5eY~vx022GRtQkaPKsv5~GNUBlXJV0FB7VrstmCkJXqSZU8Pebtiw__'
//         },
//         {
//             id: 5,
//             image: 'https://s3-alpha-sig.figma.com/img/039f/f383/e554a39a5ba10833e2875522083a993c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn6GygJxVjJ2dzYf1IHXocuZsq4t1ogRwZvGgnca3sgIwpxTcN53n1hD3CCJ6Odnvt5mOCOfaom8NVIAnejcsC9ufu-Z2wlz367CASU2XzkFR3u9FwOj07gk~~yyyF5jMeHCx1GsBS~fe-kQQmkylxZot2hC4GQjHRx~T839LrASmFD3-wvf4dazR2Su3orSb2HKU4ja70HiZh2-cp1DHa7NUl7YcxtO1QPSn5yggPANg3iP4H~wrQKWptfQ7jp5ZcN1BwaUJf7~tT32IUP47gi87CFC~2K0q5eY~vx022GRtQkaPKsv5~GNUBlXJV0FB7VrstmCkJXqSZU8Pebtiw__'
//         },
//     ]);

//   const renderComponents = {
//     0: <> <AboutTexts items={itemsBodyAbout} />,<AboutNavigate items={itemsNavigateAbout} /></>,
//     1: <> <AboutTexts items={itemsBodyAbout} />,<AboutCarousel items={itemsCouruselAbout} /></>,
//     2: <AboutDocument items={itemsBodyAbout} />,
//     3: <AboutDocument items={itemsBodyAbout} />,
//   };

//   const renderSubComponents = {
//     '3-1': <AboutDocument items={itemsBodyAbout} />,
//     '2-0': <AboutDocument items={itemsBodyAbout} />,
//   };

//   return (
//     <div className='pageNavigation'>
//          <Navigations
//             page={page}
//             selected={selected}
//             setSelected={(selected) => dispatch(setSelected(selected))}
//             selectedSub={selectedSub}
//             setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
//             list={navElements}
//           />

          
//       <div>
//         <div className="content">
//           {selectedSub !== null ? (
//             <>
//               {/* <h2 className='title_h2'>{title}</h2> */}
//               {renderSubComponents[`${selected}-${selectedSub}`]}
//             </>
//           ) : (
//             <>
//               {/* <h2 className='title_h2'>{title}</h2> */}
//               {renderComponents[selected] || <AboutDocument items={itemsBodyAbout} />}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react'

export const AboutAcademyPage = () => {
  return (
    <div>AboutAcademyPage</div>
  )
}
