import React, { useState, useEffect } from "react";

// cleanup function
// second argument

//check width of window

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
//   console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth)
  };


  useEffect(() => {
    console.log('useEffect');
    window.addEventListener("resize", checkSize);

    //cleanup func
    // return () =>{
    //     console.log('cleanup');
    //     window.removeEventListener('resize', checkSize)
        
    // }
 }, []);
console.log('render');

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
