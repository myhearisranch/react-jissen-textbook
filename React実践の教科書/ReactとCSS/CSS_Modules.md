# CSS Modules
React開発の場合はコンポーネント毎にCSSファイルを用意することが多い

~~~:CssModules.jsx
export const CssModules = () => {
  return (
    <div>
      <p> CSS Modulesです</p>
      <button>ボタン</button>
    </div>
  )
}
~~~

次に必要なモジュールを追加する
.scssの形式で記述する際に必要なnode-sassをインストールする
~~~
npm install node-sass

yarn add node-sass
~~~

コンポーネントと対になる形でCSSファイルを作成する
今回は.scssで作成する
~~~:CssModules.module.scss
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
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
}
~~~

これらのクラスを使用できるようにする
~~~:CssModules.jsx
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return(
    <div className={classes.container}>
      <p className={classes.title}>Css Modules</p>
      <button className={class.button}>ボタン</button>
    </div>
  );
};
~~~

CSSModulesの利点: 従来のweb開発と比較的に近い感覚でCSSを適用できる