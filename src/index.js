import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./context/darkModeContext";
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
<App/>
</DarkModeContextProvider>
);

// var React=require('react');
// var ReactDOM=require('react-dom');
// ReactDOM.render(
//   <DarkModeContextProvider>
// <App/>
//    </DarkModeContextProvider>
// ,document.getElementById('root'));
