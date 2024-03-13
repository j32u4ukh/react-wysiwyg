import { useSelector } from "react-redux";
import { selectTodo } from "../store/slice/todo";

const TodoList = () => {
    // useSelector：拿取 store 的 state，傳入在 slice 建立的 selectTodo
    const states = useSelector(selectTodo);

    return (
        <ul>
        {states.todolist.map((i) => (
            <li key={i.id}>{i.name}</li>
        ))}
        </ul>
    );
};

export default TodoList;