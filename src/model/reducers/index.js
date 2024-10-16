import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'player',
  initialState: {
    initPlayer: false,//音乐播放器初始化与否
  },
  reducers: {
    increment: (state) => {
      state.initPlayer = !state.initPlayer;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
