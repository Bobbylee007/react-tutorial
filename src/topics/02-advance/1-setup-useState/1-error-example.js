import React from "react";


//EX:1
const ErrorExample = () => {
  let title = "random title";
  const handleClick = () =>{
    title= 'hello world'
    console.log(title)
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}> Change Title</button>
  </React.Fragment>;
};

//NB: when we click the title did not change because we are not re-rendering the component
// this is why we will use useState

//EX:2

export default ErrorExample;
