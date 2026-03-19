import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more comples cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  // now we have the func here
  // now we pass-it as a prop down
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};

// but List dont need the func
// destructure it


const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <Singleperson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </>
  );
};

// but we need removePerson here
// to do that we need to pass the function down from List to Singleperson
const Singleperson = ({ id, name, removePerson}) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
