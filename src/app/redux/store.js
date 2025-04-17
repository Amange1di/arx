import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './slices/educationSlice';
import activityReducer from './slices/activitySlice';
import guideReducer from './slices/guideSlice';
import applicantsReducer from './slices/applicantsSlice';
import studentsReducer from './slices/studentsSlice';
import scienceReducer from "./slices/scienceSlice"
import navReducer from './slices/navSlice';
import visuallyReducer from "./slices/visually";
import aboutReducer from './slices/aboutSlice';
import homeReducer from './slices/homeSlice';
import gellaryReducer from './slices/gellarySlice';

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
    about: aboutReducer,
    home: homeReducer,
    gallery: gellaryReducer,
  },
});

export default store;
