
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPageData, setSelected, setSelectedSub , } from '../../app/redux/slices/navSlice';
// import { Navigations } from '../../features';
// import {  Scientific, ScienceCenter, Academy } from '../../widgets';

// export const SciencePage = () => {
//     const dispatch = useDispatch();
//     const { navElements, selected, selectedSub, page } = useSelector(state => state.nav);

//     useEffect(() => {
//         dispatch(fetchPageData('science'));
//     }, [dispatch]);

//     const title =
//         selected === null
//             ? "Все"
//             : selectedSub !== null
//                 ? navElements[selected]?.twoLink[selectedSub]?.link
//                 : navElements[selected]?.link;

//     const renderComponents = {
//         0: <Academy />,
//         1: <ScienceCenter />,
//         3: <Scientific />,
//     };

//     return (
//         <div className='pageNavigation'>
//             <Navigations
//                 page={page}
//                 selected={selected}
//                 setSelected={(selected) => dispatch(setSelected(selected))}
//                 selectedSub={selectedSub}
//                 setSelectedSub={(selectedSub) => dispatch(setSelectedSub(selectedSub))}
//                 list={navElements}
//             />
//             <div className="content">
//                 {selected !== null && (
//                     <>
//                         {/* <h2 className='title_h2'>{title}</h2> */}
//                         {renderComponents[selected]}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };


export const SciencePage = () => {
  return (
    <div>SciencePage</div>
  )
}
