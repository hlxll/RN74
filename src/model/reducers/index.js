import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'player',
  initialState: {
    initPlayer: false,//音乐播放器初始化与否
    isChangeScreen: false,//modelScreen组件中切换
    mainStateScreen: 'Recommend',//历史的main导航菜单
    audioListOpen: false,//打开播放列表
  },
  reducers: {
    increment: (state) => {
      state.initPlayer = !state.initPlayer;
    },
    setScreen: (state) =>{
      state.isChangeScreen = !state.isChangeScreen;
    },
    setMainState: (state, action) =>{
      state.mainStateScreen = action.payload.type;
    },
    setAudioListOpen: (state) => {
      state.audioListOpen = !state.audioListOpen;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const {
  increment,
  setScreen,
  setMainState,
  setAudioListOpen,
 } = counterSlice.actions;

export default counterSlice.reducer;
