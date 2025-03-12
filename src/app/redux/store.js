import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './slices/educationSlice';
import activityReducer from './slices/activitySlice';
import guideReducer from './slices/guideSlice';
import applicantsReducer from './slices/applicantsSlice';
import studentsReducer from './slices/studentsSlice';
import scienceReducer from "./slices/scienceSlice"
import navReducer from './slices/navSlice';
import visuallyReducer from "./slices/visually";

const store = configureStore({
  reducer: {
    nav: navReducer,
    education: educationReducer,
    activity: activityReducer,
    guide: guideReducer,
    applicants: applicantsReducer,
    students: studentsReducer,
    science: scienceReducer,
    visually: visuallyReducer,
  },
});


export default store;
