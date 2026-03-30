import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../../data";

const Person = () => {
  // console.log(useParams());
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [id]);


  return (
    <>
      <div className="container">
        <h1>{name}</h1>
        <Link to="/people" className="btn">
          Back to people
        </Link>
      </div>
    </>
  );
};

export default Person;
