import React, { useState, useEffect } from "react";
//  usEffect by default render bo'ladi
// clean up function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");

    if (value >= 5) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
