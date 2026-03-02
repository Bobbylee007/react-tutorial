import React, { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  console.log(person);

  //prob:
  //   const chagneMessage = () =>{
  //     setPerson({message:'hello world'})
  //   }

  //solu: using spread operator
    const chagneMessage = () =>{
    //   setPerson({...person, message:'hello world'});
    setMessage('hello world')
    }


    // multiple useState
    const [name, setName] = useState('peter')
    const [age, setAge] = useState(24)
    const [message, setMessage] = useState("random message");
  return (
    // <>
    //   <h3>{person.name}</h3>
    //   <h3>{person.age}</h3>
    //   <h3>{person.message}</h3>
    //   <button className="btn" onClick={chagneMessage}>
    //     change message
    //   </button>
    // </>

    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={chagneMessage}>
        change message
      </button>
    </>
  );
};


export default useStateObject;
