import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import { HooksApp } from "./HooksApp.jsx"; */
/* import { CounterApp } from "./01-useState/CounterApp.jsx"; */
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook.jsx";
// import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
// import { SimpleFormCustomHook } from "./02-useEffect/SimpleFormCustomHook.jsx";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks.jsx";
// import { FocusScreen } from "./04-useRef/FocusScreen.jsx";
import { Memorize } from "./05-memo/Memorize.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>
);
