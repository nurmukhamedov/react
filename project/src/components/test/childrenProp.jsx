import React from "react";
import "../book/books.css";

const childrenProp = props => {
  return (
    <div>
      <div className="border_box">{props.children}</div>
      <div>{props.left}</div>
    </div>
  );
};

export default childrenProp;
