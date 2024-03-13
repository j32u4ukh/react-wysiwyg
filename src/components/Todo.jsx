import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { addTodo } from "../store/slice/todo";
import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  // useDispatch：需藉由 useDispatch 使用 store 裡的 actions，傳入在 slice 建立的 addTodo()
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: new Date().getTime(), name: text }));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={changeText}
      />

      <TodoList />

      <button onClick={handleAddTodo}>
        新增行程
      </button>
    </div>
  );
}