import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  isOpen: boolean;
  activeTab: string;
  mobileOpen: boolean;
}

const initialState: NavState = {
  isOpen: false,
  activeTab: 'home',
  mobileOpen: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    navToggle(state, action) {
      state.activeTab = action.payload;
    },
    toggleMobile(state) {
      state.mobileOpen = !state.mobileOpen;
    }
  },
});
export const navActions = navSlice.actions;

export default navSlice;
