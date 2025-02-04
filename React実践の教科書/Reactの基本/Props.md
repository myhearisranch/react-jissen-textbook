# Props
コンポーネントに外部から値を引き渡すの仕組み。
コンポーネントにデータを「渡す」ことで、そのデータをコンポーネント内で表示したり使ったりできる。

例え: プレゼントを渡す
・親コンポーネントは「プレゼント」を子コンポーネントに渡す役割を果たす。
・子コンポーネントはそのプレゼント（データ）を受け取り、開けて使う（表示や処理）ことができます。

具体的に、親が「プレゼント」の内容（データ）を決め、それを子に渡して、子がその内容を「見る」「使う」というイメージ

## Propsを学ぶ下準備
ピンク色の文字を追加
~~~:App.jsx
export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const  contentStyle = {
    color: "blue";
    fontSize: "20px";
  };

  //ピンク用に追加
  const contentPinkStyle = {
    color: "pink";
    fontSize: "20px";
  };

  return(
    <>  
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか?</p>
      <p style={contentPinkStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
~~~

ピンク用にstyleを書いたが似たようなstyleを書くのは面倒かつ無駄にコードが長くなる
=> 色とテキストをPropsとして受け取って色つきの文字を返すコンポーネントを作成する

## ColoredMessageという名前でコンポーネントを作成し、青色で「お元気ですか?」と固定表示する

1. componentsフォルダを作成し、ColoredMessage.jsxファイルを作成する

~~~ColoredMessage.jsx
export const ColoredMessage = () => {
  const  contentStyle = {
    color: "blue";
    fontSize: "20px";
  };

  return <p style={contentStyle}>お元気ですか?</p>
}
~~~

2. App.jsxにColoredMessageをimportして表示する

~~~
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const contentPinkStyle = {
    color: "pink";
    fontSize: "20px";
  };

  return(
    <>  
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage />
      <p style={contentPinkStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
~~~

## Propsの使い方
Propsを渡す方のコンポーネント　　: App.jsx
Propsを渡される方のコンポーネント: ColoredMessage.jsx

1. 渡す方はコンポーネントのタグの中に任意の名称をつける
　 Propsを渡す。色とメッセージをPropsとして渡すのでColor, messageとする

colorとmessageをPropsとして渡す:
~~~:App.jsx
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const contentPinkStyle = {
    color: "pink";
    fontSize: "20px";
  };

  return(
    <>  
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage color ="blue" message="お元気ですか?" />
      <p style={contentPinkStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
~~~

2. Propsを渡された方でPropsを使えるようにする
~~~:ColoredMessage.jsx
export const ColoredMessage = () => {
  const  contentStyle = {
    color: props.color
    fontSize: "20px";
  };

  return <p style={contentStyle}>{props.message}</p>
}
~~~

~~~:App.jsx
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const contentPinkStyle = {
    color: "pink";
    fontSize: "20px";
  };

  return(
    <>  
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage color ="blue" message="お元気ですか?" />
      <ColoredMessage color ="pink" message="元気です!" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
~~~

手順:
1. Propsを渡すコンポーネント(親コンポーネント)を作成する 
2. Propsを受け取るコンポーネント（子コンポーネント）を作成する

例え:
親コンポーネントは関数を呼び出す側（引数を渡す側）
子コンポーネントは関数を受け取って処理をする側（引数を受け取る側）

## children
コンポーネントのタグで囲まれた内容
例: 
~~~
<ColoredMessage>nushida</ColoredMessage>
~~~

ここでいうnushidaがコンポーネント
childrenを使うことで分かりやすくなる

テキストをChildrenとして渡す(=コンポーネントのタグでテキストを囲む)
~~~
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

  const onClickButton = () => {
    alert();
  }

  const contentPinkStyle = {
    color: "pink";
    fontSize: "20px";
  };

  return(
    <>  
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
};
~~~

childrenでメッセージを受け取る:
(=コンポーネントのタグでテキストを囲む場合、Propsの受け取り方が変わる)
~~~:ColoredMessage.jsx
export const ColoredMessage = () => {
  const  contentStyle = {
    color: props.color
    fontSize: "20px";
  };

  return <p style={contentStyle}>{props.children}</p>
}
~~~

## Propsを扱うテクニック

propsの確認:
~~~ColoredMessage.jsx
export const ColoredMessage = (Props) => {
  const  contentStyle = {
    
    color: props.color
    fontSize: "20px";
  };

  return <p style={contentStyle}>{props.message}</p>
}
~~~

Propsの分割代入:
propsからcolor, childrenを取り出して使う
props.color, props.childrenという記述が不要になる

~~~
export const ColoredMessage = (Props) => {
  const {color, children} = props;

  const  contentStyle = {
 
    color: color
    fontSize: "20px";
  };

  return <p style={contentStyle}>{children}</p>
}
~~~

省略記法のルールに則った記述
color: プロパティで使う部分とpropsで取り出す変数部分が同じなので省略できる
~~~
export const ColoredMessage = (Props) => {
  const {color, children} = props;

  const  contentStyle = {
 
    color,
    fontSize: "20px";
  };

  return <p style={contentStyle}>{children}</p>
}
~~~

引数の段階で展開するパターン
{ color, children }のように引数の段階でpropsからcolor, childrenを取り出して使う
~~~
export const ColoredMessage = ({ color, children }) => {
  const  contentStyle = {
 
    color,
    fontSize: "20px";
  };

  return <p style={contentStyle}>{children}</p>
}
~~~
