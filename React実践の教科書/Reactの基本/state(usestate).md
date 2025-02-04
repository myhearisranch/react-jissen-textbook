# state
## stateとは
webアプリを作る場合は様々な状態を画面は持っている。
・エラーがあるか
・モーダルウィンドウが開いているか
・ボタンを押せるか
・テキストボックスに何を入力してるのか

このような「状態」を管理する概念

## useSteate
useSteate: Stateを扱う関数

使い方:
インポートする
~~~
import {useSteate} from "react";
~~~

使用例:
~~~
const [num, setNum] = useSteate();
~~~
numが状態を持った変数, setNumがそれを更新する関数となる

Stateの初期値の設定方法
useSteate()関数に引数を指定する
~~~
const [num, setNum] = useSteate(0);
~~~

useSteateを用いたカウントアップ機能の実装
~~~App.jsx
import {useSteate} from "react";
import {ColorMessage} from "./components/ColorMessage";

export const App = () => {
  //Stateの定義
  const [num, setNum] = useSteate(0);

  //ボタンを押した時にStateをカウントアップ
  const OnClickButton = () => {
    setNum(num + 1);
  };

  return(
    <>
      <h1 style={{colr:"red"}}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
~~~