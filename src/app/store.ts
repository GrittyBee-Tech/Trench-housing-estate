import { configureStore } from '@reduxjs/toolkit';
import navSlice from './features/nav-slice';
import featuredSlice from './features/featured-slice';

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    feature: featuredSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
