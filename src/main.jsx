import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import { HooksApp } from "./HooksApp.jsx"; */
/* import { CounterApp } from "./01-useState/CounterApp.jsx"; */
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook.jsx";
// import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
// import { SimpleFormCustomHook } from "./02-useEffect/SimpleFormCustomHook.jsx";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks.jsx";
// import { FocusScreen } from "./04-useRef/FocusScreen.jsx";
//?import "./07-useReducer/intro-reducer.js";
// import { Memorize } from "./05-memo/Memorize.jsx";
import { TodoApp } from "./07-useReducer/TodoApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>
);
