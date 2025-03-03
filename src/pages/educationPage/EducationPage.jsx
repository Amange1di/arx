// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPageData, setSelected, setSelectedSub } from '../../app/redux/slices/navSlice';
// import { Cpo } from '../../widgets';
// import { Navigations } from '../../features/navigations/Navigations';

// export const EducationPage  = () => {
//   const dispatch = useDispatch();
//   const { navElements, selected, selectedSub, page } = useSelector(state => state.nav);

//   useEffect(() => {
//     dispatch(fetchPageData('education'));
//   }, [dispatch]);

//   const title = selected === null
//     ? "Все"
//     : navElements[selected]?.link;
//   const getCards = () => {
//     if (selected === null) {
//       return navElements.flatMap(item => item.cards || []);
//     }
//     return navElements[selected]?.cards || [];
//   };

//   return (
//     <div className='pageNavigation'>
//         <Navigations
//           page={page}
//           selected={selected}
//           setSelected={(selected) => dispatch(setSelected(selected))}
//           selectedSub={selectedSub}
//           setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
//           list={navElements}
//         />
//       <div>
//         <div className="content">
//           <Cpo cards={getCards()} />
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react'

export const EducationPage = () => {
  return (
    <div>EducationPage</div>
  )
}
