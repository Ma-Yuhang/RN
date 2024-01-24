import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    listData: [
      {
        title: '吃饭',
        done: false
      },
      {
        title: '睡觉',
        done: true
      },
      {
        title: '打豆豆',
        done: false
      },
    ]
  },
  reducers: {
    // 增加一条待办事项
    increment: (state, actions) => {
      let arr = [...state.listData]
      arr.push({
        title: actions.payload,
        done: false
      })
      state.listData = arr
    },
    // 删除一条
    decrement: (state, actions) => {
      let arr = [...state.listData]
      arr.splice(actions.payload, 1)
      state.listData = arr
    },
    // 更改完成状态
    changeStatus(state, actions) {
      let arr = [...state.listData]
      arr[actions.payload].done = !arr[actions.payload].done
      state.listData = arr
    }
  }
})

export const { increment, decrement, changeStatus } = todoListSlice.actions
export default todoListSlice.reducer