# 再レンダリングと副作用(useEffect)
## 再レンダリング
再レンダリング: 変更を検知してコンポーネントを再処理すること

## 副作用とuseEffect
副作用: データ取得、DOMの操作、タイマーの設定など、コンポーネントの描画とは直接関係ない処理。
useEffect: コンポーネントの描画後に実行される関数(副作用)を制御する関数

使い方:
Reactからimportする
~~~
import  { useEffect } from "react";
~~~

以下の構文で使用する
~~~
useEffect { 実行する関数 , [依存する値] };
~~~

useEffectの役割: 「ある値が変わった時に限り、ある処理を実行する」

例: Stateの値が変わった時にアラートを表示する
~~~
expot const App = () => {

  useEffect(() => {
    alert();

  }, [num]); 

  return(
    <>
      <h1 style={{colr:"red"}}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
}
~~~

第一引数: アロー関数で処理を記述する
第二引数: 必ず配列で指定