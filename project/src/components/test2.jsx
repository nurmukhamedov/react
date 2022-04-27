import React from "react";

function test2(props) {
  return (
    <div>
      Sana: {props.date.toISOString()}
      <h2>Sabab: {props.title}</h2>
      <p>Narxi: ${props.amount} </p>
    </div>
  );
}
export default test2;
