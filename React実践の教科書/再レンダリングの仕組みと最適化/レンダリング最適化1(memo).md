# レンダリング最適化1(memo)
プロジェクトルート/
├── src/
│   ├── components/
│   │   ├── Child1.jsx
│   │   ├── Child2.jsx
│   │   └── Child3.jsx
|   |   └── Child4.jsx
│   └── index.js
├── public/
│   ├── index.html
├── package.json等

## 事前準備
~~~:App.jsx
import {useState} from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export App = () => {
  //各コンポーネントが再レンダリングされることを
  //コンソールで確認する
  console.log("Appレンダリング");
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num+1);
  }
  return(
    <>
      <button onClick ={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </>
  );
};
~~~

~~~:Child1.jsx
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px";
  backgroundColor: "lightblue";
  padding: "8px";
};

export const Child1 = () => {
  console.log("Child1レンダリング");

  return (
    <div style = {style}>
      <p>Child</p>
      <Child2 />
      <Child3 />
    </div>
  )
};
~~~

~~~:child3.jsx
const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child3 = memo(() => {
  console.log("Child3 レンダリング ");

  return (
    <div style={style}>
      <p>Child3</p>
    </div>
  );
});
~~~

~~~:child4.jsx
const style = {
  height:"200px";
  backgroundColor: "white";
  padding:"80px";
};

export const Child4 = () => {
  console.log("Child4レンダリング");

  return(
    <div style={style}>
      <p>Child4</p>
    </div>
  )
};
~~~

## React.memo
コンポーネント, 変数, 関数などの再レンダリング時の制御をするにはメモ化を行う。
メモ化: 前回の処理結果を保持しておくことで処理を高速化する技術
memo: メモ化をするのに使用するもの

~~~
const Component = memo(() => {})
~~~

この記述によってコンポーネントはPropsに変更がない限り
再レンダリングされない

メモ化:

~~~:App.jsx
import {useState, memo} from "react";

export const App = memo( () => {

});
~~~

~~~:Child1.jsx
export const Child1 = memo( () => {

});
~~~

~~~:Child2.jsx
export const Child2 = memo ( () => {

});
~~~

~~~:Child3.jsx
export const Child3 = memo ( () => {

});
~~~

~~~:Child4.jsx
export const Child4 = memo ( () => {

});
~~~

メモ化したことで再レンダリングされるのがAppコンポーネントのみ
となる

