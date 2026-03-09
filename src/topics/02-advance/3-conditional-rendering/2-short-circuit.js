import React, { useState } from "react";

// short-circuit eveluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  //   const firstValue = text || 'hello world';
  //   const secondValue = text && 'hello world';

  return (
    <>
      {/* if()Block can't work here because it will always return a value that 
        why we use conditional rendering, short-circuit and ternary operator */}

      {/* <h2>{firstValue}</h2>
      <h2>value: {secondValue}</h2> */}

      {/* short-circuit */}
      <h1>{text || "bobby lee"}</h1>
      {text && <h1>hello world</h1>}

      {/* flip it or opposit value*/}
      {!text && <h1>hello world</h1>}

      {/* flip it or get opposit value*/}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {/* ternary operator give 2possible values*/}
          {isError ? (
        <p>there is an Error...</p>
      ) : (
        <div>
          <h2>this is no error</h2>{" "}
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
