# Emotion 
CSSをJavaScript内で書けるツール

1. Emotion.jsxという名前のコンポーネントを作成する
~~~:Emotion.jsx
export const Emotion = () => {
  return(
    <div>
      <p>Emotion</p>
      <button>ボタン</button>
    </div>
  );
};
~~~

2. @emotion/styledをインストールする
~~~
npm install @emotion/react @emotion/styled
~~~

コンポーネントファイルの中にCSSを書く方法
~~~:Emotion.jsx
import {jsx, css } from "@emotion/react";

exprot const Emotion = () => {

    const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return(
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>ボタン</button>
    </div>
  );
};
~~~

JavaScriptのオブジェクトでスタイルを定義する方法
~~~:Emotion.jsx
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // scssの書き方がそのまま可能な書き方
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // インラインスタイルの書き方
  // css({})とすることで、その中にCSSを書いていく
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  return(
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>ボタン</button>
    </div>
  );
};
~~~

styled componentsのような書き方をする方法
~~~:Emotion.jsx
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // scssの書き方がそのまま可能な書き方
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // インラインスタイルの書き方
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion です </p>
      <SButton>ボタン</SButton>
    </div>
  );
};

// styled-componentsの書き方
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
~~~
