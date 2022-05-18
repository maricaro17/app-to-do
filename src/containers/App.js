import { Provider } from "react-redux";
import Header from "../components/Header";
import store from "../redux/store";
import Todo from "./Todo";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Todo/>
      </div>
    </Provider>
  );
}

export default App;
