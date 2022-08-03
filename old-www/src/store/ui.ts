import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

export type UiState = typeof initialState;

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state): void => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { actions, reducer } = ui;

export default ui.reducer;
