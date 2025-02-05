# Styled JSX
styled-jsxは、Next.jsでよく使われるCSS-in-JSのライブラリ

事前準備:
~~~:StyledJsx.jsx
export const StyledJsx = () => {
  return(
    <div>
      <p>Styled JSXです</p>
      <button>ボタン</button>
    </div>
  );
};
~~~

styled-jsxのインストール
~~~
npm install styled-jsx

yarn add styled-jsx
~~~

## StyledJSXの使用
~~~:StyledJsx.jsx
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled JSXです</p>
        <button className="button">ボタン</button>
      </div>

      <style jsx>{`
        .container {
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #aaa;
        }
        .button {
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
~~~

Styled JSXはコンポーネント内でstyleタグを使用し、
その中にCSSを記述する。

styleタグの使用法:
~~~
<style jsx>{
  /*ここにCSSを書く*/
}
</style>
~~~