import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";

/*
認識變數
使用 Redux Toolkit，你會聽到幾個關鍵字：

store：用來存放資料狀態
reducer：用來放改變 state 狀態的方法
action：reducer 要修改 state 的話，需要傳入 action ，去判斷要啟動哪個 reducer，藉由 dispatch 呼叫方法
Provider：在所有組件的最外面包一層 Provider，傳入 store，所有被包覆的組件都可以使用到 store 的狀態。
slice：存放 state、reducer、action 的檔案
Redux 流程
創建 Store
在最外層加入 Provider，並傳入 store，使整個組件都能使用 store 資料
創建 Slice，設定 state、reducer、action
畫面渲染，取得 state、dispatch 方法改變狀態
*/

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
