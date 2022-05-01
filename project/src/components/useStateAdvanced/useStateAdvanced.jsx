import React, { useState } from "react";
import { data } from "../data";

const UseStateAdvanced = () => {
  //   console.log(useState("Hello world"));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log(value, handler);
  const [people, setPeople] = useState(data);
  const removeItem = id => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateAdvanced;
