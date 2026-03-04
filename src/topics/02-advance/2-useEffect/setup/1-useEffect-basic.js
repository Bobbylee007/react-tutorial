import React, {useState, useEffect} from 'react'

// by defualt runs after every re-render
// cleanup function
// second parameter

//NB: useEffect and other hooks won't work inside if() block


const UseEffectBasic = () => {
const [value, setValue] = useState(0)


// use useEffect to update title
  // useEffect(()=>{
  //   console.log('call useEffect');
  //   document.title=`New Messages(${value})`
  // })

//use useEffect conditionally
  // useEffect(() => {
  //   console.log("call useEffect");
  //   if (value >= 1) {
  //     document.title = `New Messages(${value})`;
  //   }
  // });

//second parameter
// second argument as [] empty array of list dependencies useEffect will run on initail render
// if u only want useEffect to run any time u change value[ can be: text,obj array or name of dependencies]
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  //can add many useEffect as u want
    useEffect(() => {
      console.log("hello world");
   
    }, []);
  console.log('render component');
  

  return (
    <>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
    </>
  )
}

export default UseEffectBasic
