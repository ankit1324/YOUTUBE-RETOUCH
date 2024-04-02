import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    darkTheme: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, toggleTheme, closeMenu, openMenu } =
  appSlice.actions;
export default appSlice.reducer;
