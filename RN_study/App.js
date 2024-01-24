import { Provider } from "react-redux";
import AA from "./src/aa.js";
import store from './store'
export default function App() {
  return (
    <Provider store={store}>
      <AA></AA>
    </Provider>
  )
}