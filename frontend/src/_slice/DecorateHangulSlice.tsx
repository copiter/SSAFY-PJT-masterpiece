import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textSize: 50,
  textColor: '#000000',
  textXAxis: 0,
  textYAxis: 0,
  textLineSpacing: 0,
  strokeWidth: 0,
  strokeOpacity: 1,
  strokeColor: '#ffffff',
  shadowXAxis: 0,
  shadowYAxis: 0,
  shadowBlur: 5,
  shadowColor: '#000000',
  backgroundColor: '#ededed',
  fontName: 'BlackHanSans',
  style: {
    width: '100%',
    maxHeight: '100%',
    overflow: 'auto',
    bgcolor: 'background.paper',
    '-ms-overflow-style': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

const DecorateHangulSlice = createSlice({
  name: 'deco',
  initialState,
  reducers: {
    textSize(state, action) {
      state.textSize = action.payload;
    },
    textColor(state, action) {
      state.textColor = action.payload;
    },
    textXAxis(state, action) {
      state.textXAxis = action.payload;
    },
    textYAxis(state, action) {
      state.textYAxis = action.payload;
    },
    textLineSpacing(state, action) {
      state.textLineSpacing = action.payload;
    },
    strokeWidth(state, action) {
      state.strokeWidth = action.payload;
    },
    strokeOpacity(state, action) {
      state.strokeOpacity = action.payload;
    },
    strokeColor(state, action) {
      state.strokeColor = action.payload;
    },
    shadowXAxis(state, action) {
      state.shadowXAxis = action.payload;
    },
    shadowYAxis(state, action) {
      state.shadowYAxis = action.payload;
    },
    shadowBlur(state, action) {
      state.shadowBlur = action.payload;
    },
    shadowColor(state, action) {
      state.shadowColor = action.payload;
    },
    backgroundColor(state, action) {
      state.backgroundColor = action.payload;
    },
    fontName(state, action) {
      state.fontName = action.payload;
    },
  },
});

export const decoActions = DecorateHangulSlice.actions;

export default DecorateHangulSlice.reducer;