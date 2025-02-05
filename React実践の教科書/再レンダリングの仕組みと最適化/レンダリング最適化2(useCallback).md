# レンダリング最適化2(useCallback)
memoを使用することでコンポーネントをメモ化できる
続いて関数をメモ化する

事前準備:
~~~:App.jsx
export const App = memo( () => {
  const onClickReset = () => {
    setNum(0);
  }
});

return (
  <>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
    <Child1 onClickReset={onClickReset} />
    <Child4 />
  </>
)
~~~

~~~:Child1.jsx
export const Child1 = memo(props) => {
  console.log("Child1レンダリング");
  const {onClickReset} = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  );
};
~~~
再レンダリングを再度確認すると、カウントアップの度にChild1が再レンダリングされる

## React.useCallback
関数をPropsに渡す時にコンポーネントをメモ化していても
再レンダリングされてしまう原因は関数の再生成
再レンダリング等でこのコードが実行される度、常に新しい関数が再生成される
=> Reactの中にあるuseCallbackを使って関数のメモ化を行う。

useCallback
~~~
//useCallbackの第一引数は関数, 第二引数は依存配列
const onClickButton = useCallback( () => {
  alert('ボタンが押されました!');
}, []);
~~~
依存配列が空のとき関数は最初に作成されたものが使い回される

useCallbackを適用
~~~:App.jsx
import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("App レンダリング ");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  //useCallbackを使って関数をメモ化
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
~~~

子コンポーネントにPropsとして渡していくことになる関数は
積極的にuseCallbackを使ってメモ化する