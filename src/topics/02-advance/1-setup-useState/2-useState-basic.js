import React, { useState } from "react";


// Hooks must start wit < use >
// to use hooks component name must be uppercase
// hooks must be in the  /function/component
// cannot call hooks conditionally


const UseStateBasic = () => {
    //manual approach
  // console.log(useState('hello world'));
  // const value = useState(1)[0]; //value
  // const handler = useState(1)[1]; //function that control the value
  // console.log(value, handler);

  const [text, setText] = useState("random title");

  //   const handleClick = () => {
  //     setText("hello world");
  //     console.log(text);
  //   };

  const handleClick = () => {
    // using if logic to toggle
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasic;
