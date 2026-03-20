import React, { useState, useContext } from "react";
import { data } from "../../../data";





//create context
const PersonContext = React.createContext();
//access to (2)components - Provider, Consumer
//NB: we dont need consumer since useContext is created

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  //find root component and rap the return with create context
  //pass-in value and use useContext to access this value
  return (
    <PersonContext.Provider value={{removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};


const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <Singleperson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </>
  );
};

const Singleperson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext);
  console.log(data);
  
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove </button>
    </div>
  );
};

export default ContextAPI;
