import React from "react";
import ReactDOM from "react-dom/client"; // `client` を使う
import { App } from "./App";

//コンポーネントを表示する場所を指定
const root = ReactDOM.createRoot(document.getElementById("root"));

//Appコンポーネントを表示する
root.render(<App />);
