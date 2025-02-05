# Tailwind CSS
あらかじめ用意されたクラスを組み合わせてスタイルを適用できる。
CSSを書かなくてもデザインできる

1. TailwindCss.jsxを作成する
~~~
export const Tailwind = () => {
  return (
    <div>
      <p>TailwindCssです</p>
      <button>ボタン</button>
    </div>
  );
};
~~~

2. 必要なものをインストールする
~~~
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compatpostcss@^7 autoprefixer@^9
~~~

3. CRACOのインストール
CRACO: create react appの設定を簡単にカスタマイズできるツール
~~~
npm install @craco/craco
~~~

4. package.jsonの修正
package.jsonをCRACOを使って起動するように変更する
~~~:package.json
{
  "scripts": {

    //下記3つに変更する
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",

    "eject": "react-scripts eject"
  },
}
~~~

5. craco.config.jsの作成
CRACOを使ってCRAの設定（Webpackなど）をカスタマイズするためにプロジェクトルートにcraco.config.jsという名前でファイルを作成し
以下の内容を設定する
~~~:craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
};
~~~

4. tailwind.config.jsの作成
以下のコマンドをプロジェクトルートパスで実行し、taileind.config.jsというファイルを生成する
~~~
npx tailwindcss init
~~~

生成されたファイル
~~~:tailwind.config.js
module.exports = {
  purge: [コンポーネント, index.htmlを指定する],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
~~~

指定したファイルの中で使用していないスタイルがあると
ビルド時に自動で取り除いてくれる
=> コンポーネント, index.htmlを追加する(どのファイルでTailwindのクラスを使うのかを指定する)

index.htmlを指定する
~~~:tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
~~~

5. index.cssの修正
Tailwind CSSを使えるようにindex.cssに以下の3行を追加する
~~~:index.css
@tailwind base;
@tailwind components;
@tailwind utilitites;
~~~

## Tailwind CSSの使用
各タグのclassName属性に自分で定義したクラス名を
設定する要領でTailwind CSSが用意するクラス名を指定する

~~~:TailwindCss.jsx
export const TailwindCss = () => {
  return (
    <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <p className="m-0 text-gray-400">Tailwind CSSです</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">
        ボタン
      </button>
    </div>
  );
};
~~~

bootstrapに似ている。


## **ReactでのCSSの適用方法と違い**  

| 方法 | 特徴 | メリット | デメリット |
|------|------|----------|------------|
| **CSS Modules** | `.module.css` を使う | ✅ クラス名が自動でユニーク化される <br> ✅ 通常のCSSとほぼ同じ感覚で書ける | ❌ JavaScript側で`styles.className`と書く手間がある |
| **Emotion** | CSS-in-JS ライブラリ | ✅ JavaScript内でスタイルを定義できる <br> ✅ クラス名の競合なし <br> ✅ `@emotion/react` で動的スタイルも可能 | ❌ JavaScriptの実行時にCSSが適用されるのでパフォーマンスに影響することがある |
| **styled-components** | CSS-in-JSの代表的なライブラリ | ✅ コンポーネント単位でスタイルを管理できる <br> ✅ propsを使って動的にスタイル変更できる | ❌ ランタイムでスタイルを適用するため、パフォーマンスが落ちることがある |
| **styled-jsx** | Next.js に標準搭載 | ✅ コンポーネントごとにスコープ化されたCSSが書ける <br> ✅ Next.jsと相性が良い | ❌ React単体では使いにくい |
| **Tailwind CSS** | ユーティリティファーストCSS | ✅ CSSを書かなくてもクラス名でデザインできる <br> ✅ 軽量＆パフォーマンスが良い <br> ✅ レスポンシブが簡単 | ❌ クラス名が長くなりがち |

---

## **どれを使うのがいい？**
**✅ 用途によって最適な方法が異なる**  

1️⃣ **「通常のCSSに近い方法がいい」** → **CSS Modules**  
2️⃣ **「コンポーネントごとに完結したスタイルを管理したい」** → **styled-components / Emotion**  
3️⃣ **「Next.js を使う」** → **styled-jsx**  
4️⃣ **「効率よくデザインしたい・パフォーマンスを重視」** → **Tailwind CSS**（おすすめ！）  

---

### **📌 おすすめの選び方**
✅ **チーム開発なら** → `CSS Modules` or `Tailwind CSS`   
✅ **個人開発なら** → `styled-components` or `Emotion`  
✅ **デザインの自由度より開発速度重視なら** → `Tailwind CSS`  

💡 **結論：迷ったら Tailwind CSS！** 🚀  
（クラスだけでスタイルを管理できるので、効率が良く、最近のトレンドにも合っている！）
