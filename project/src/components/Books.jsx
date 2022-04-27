import React from "react";
import "./books.css";

const Books = props => {
  return (
    <div className="book">
      <img className="book_img" src={props.img} alt="Atomic Habits" />
      <div className="book_desc">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    </div>
  );
};

export default Books;
