import React, { useState } from "react";
// JS
// const input = document.getElementById('myText')
// const inputValue = input.value

// React
// value, onChange

const FormControl = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  // adding person or people dynamically to a lis
  const [people, setPeople] = useState([]);

  //control form behaviour
  // now we have access to form value from useState connection
  //  we can use them in submit handle
  const handleSubmit = (e) => {
    e.preventDefault();

    //check for empty value
    if (firstName && email) {
      const person = {
        // firstName:firstName, email:email
        //shorthand: since var is same with property name
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      console.log(person);
      
      setPeople((people) => {
        return [...people, person];
      });
      // set back input to empty value
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            {/* connect ur input with value  */}
            {/* to type input connect onChange  */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <button type="submit" onClick={handleSubmit}>add person</button> */}
          <button type="submit">add person</button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default FormControl;
