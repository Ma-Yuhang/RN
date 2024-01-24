import { createSlice } from "@reduxjs/toolkit";

const translateSlice = createSlice({
  name: 'translate',
  initialState: {
    // 语言列表
    lanList: [
      { chs: "英文", lang: "en", index: 0 },
      { chs: "中文", lang: "zh", index: 1 },
      { chs: "日语", lang: "jp", index: 2 },
      { chs: "韩语", lang: "kor", index: 3 },
      { chs: "法语", lang: "fra", index: 4 },
      { chs: "德语", lang: "de", index: 5 },
      { chs: "俄语", lang: "ru", index: 6 },
      { chs: "泰语", lang: "th", index: 7 },
      { chs: "西班牙语", lang: "spa", index: 8 },
      { chs: "阿拉伯语", lang: "ara", index: 9 },
      { chs: "意大利语", lang: "it", index: 10 },
      { chs: "葡萄牙语", lang: "pt", index: 11 },
    ],
    curIndex: 0, // 默认一开始翻译成英语
    // 翻译历史
    history: [],
  },
  reducers: {
    // 选择语言
    changeLan: (state, action) => {
      state.curIndex = action.payload;
    },
    // 添加历史记录
    addHistory: (state, action) => {
      const arr = [...state.history];
      arr.unshift(action.payload);
      state.history = arr;
    },
    // 删除历史记录
    clearHistory: (state) => {
      state.history = [];
    }
  },
})

export default translateSlice.reducer
export const { changeLan, addHistory, clearHistory } = translateSlice.actions