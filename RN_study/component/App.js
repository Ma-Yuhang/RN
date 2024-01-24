import { Provider } from "react-redux";
import ToDoList from "./component/ToDoList";
import store from './store'
export default function App() {
  return (
    <Provider store={store}>
      <ToDoList></ToDoList>
    </Provider>
  )
}

// 到时候直接放在根目录中（todoList案例的App.js）