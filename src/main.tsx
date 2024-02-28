import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/configStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
