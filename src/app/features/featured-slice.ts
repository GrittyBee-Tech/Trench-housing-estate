import { createSlice } from '@reduxjs/toolkit';

const featuredSlice = createSlice({
  name: 'feature',
  initialState: { activeFeature: 'homes' },
  reducers: {
    toggle(state, action) {
      state.activeFeature = action.payload;
    },
  },
});
export const featureActions = featuredSlice.actions;
export default featuredSlice;
