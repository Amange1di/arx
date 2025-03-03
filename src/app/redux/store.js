import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
// import activityBannerReducer from "./slices/activityBannerSlice"
// import activityCardReducer from "./slices/activityCardSlice"
import activityReducer from './slices/activitySlice';
import guideReducer from './slices/guideSlice';
import applicantsReducer from './slices/applicantsSlice';
import studentsReducer from './slices/studentsSlice';

const store = configureStore({
  reducer: {
    nav: navReducer,
    // activityBanner: activityBannerReducer,
    // activityCard: activityCardReducer,
    activity: activityReducer,
    guide: guideReducer,
    applicants: applicantsReducer,
    students: studentsReducer,
  },
});

export default store;
