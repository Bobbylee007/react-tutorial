import React, { useState, useEffect } from "react";

// we display some components or element base on conditions
// using if() block

const url = "https://api.github.com/users/QuincyLarson";

// const MultipleReturns = () => {
//   //basics
//   // here we can return single or multipls returns
//   const [loading, setLoading] = useState(false);
//   if (loading) {
//     return <h2>loading...</h2>;
//   }
//   return (
//     <>
//       <h2>multiple returns</h2>
//     </>
//   );
// };

const MultipleReturns = () => {
  //complex
  // here we can return single or multipls returns
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    // setIsLoading(true) change it at the inital assigning which is at the top;
    fetch(url)
        //setting fetch error or 404 is adding 3rd argument as object & set headers 
        //then(()=>{},)


      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299){
            return resp.json();
        }else{
            setIsLoading(false)
            setIsError(true)
            throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error)); // u catching network error not 404
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
