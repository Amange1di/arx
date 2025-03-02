import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import activityBannerReducer from "./slices/activityBannerSlice"
import activityCardReducer from "./slices/activityCardSlice"

const store = configureStore({
  reducer: {
    nav: navReducer,
    activityBanner: activityBannerReducer,
    activityCard: activityCardReducer
  },
});

export default store;
