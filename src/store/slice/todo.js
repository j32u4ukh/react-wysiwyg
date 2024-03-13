import { createSlice } from "@reduxjs/toolkit";

/*
createSlice：創建 slice，把 Redux 原生的 state、reducer、action 都合在一包，稱之為 slice

name：取一個相關的名稱

initialState：所有狀態的初始值

reducers：存放函式，傳入兩個參數，第一個為需要修改的 state，第二個為 action 讓你傳入的參數，用來改變 state
*/

export const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todolist: [
      { id: 1, name: "起床" },
      { id: 2, name: "刷牙洗臉" },
      { id: 3, name: "吃早餐" },
      { id: 4, name: "上班" },
    ],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions; // 取用方法
export const selectTodo = (state) => state.todo; // 取用資料
export default todoSlice.reducer;
