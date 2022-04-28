import React, { useState } from "react";
import "./books.css";
import Counter from "./Counter";

const Books = props => {
  const [title, setTitle] = useState(props.title); 
 

  // const clickHandler = () => {
  //   console.log("Clicked");
  // };

  const titleChangeHandler = () => {
    setTitle("Crash Coding interview");
  };
  const titleResetHandler = () => {
    setTitle(props.title);
  };

  return (
    <div className="book">
      <img className="book_img" src={props.img} alt="Atomic Habits" />
      <div className="book_desc">
        <h2>{title}</h2>
        <p>{props.author}</p> <br />
        <button onClick={titleChangeHandler}>Change Title</button>
        <br />
        <button onClick={titleResetHandler}>Reset Title</button>
        <Counter />
      </div>
    </div>
  );
};

export default Books;
