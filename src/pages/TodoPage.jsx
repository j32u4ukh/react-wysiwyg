import { Provider } from "react-redux";
import store from "../store";
import Todo from "../components/Todo";

export default function TodoPage(){
    return (
        <Provider store={store}>
          <Todo />
        </Provider>
      );
}