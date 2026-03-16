import React,{useEffect, useRef} from 'react'

//use for uncontrolled input
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasic = () => {

  const refContainer = useRef(null)
  const divContainer = useRef(null);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
  console.log(refContainer.current.value);
  console.log(divContainer.current);
  }
  console.log(refContainer);
  
  //target input to focus once app load

  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus()
    
  })
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
}

export default UseRefBasic
