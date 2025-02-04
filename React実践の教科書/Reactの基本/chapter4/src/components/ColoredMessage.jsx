import { Children } from "react";

export const ColoredMessage = (props) => {
  // console.log(props);
  // {color: 'blue', message: 'お元気ですか?'}

  //propsを分割代入
  const { color, Children } = props;

  const contentStyle = {
    color: color,
    //プロパティ名と設定値が同一になったときの省略記法
    //color,
    fontSize: "20px",
  };

  return <p style={contentStyle}>{props.children} </p>;
};
