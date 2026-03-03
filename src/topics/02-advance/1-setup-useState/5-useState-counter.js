import React, { useState } from "react";

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  //complex
  const complexIncrease = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      {/* Basic example */}
      <section className={{ margin: "4rem" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>

      {/* Basic example */}

      <section className={{ margin: "4rem" }}>
        <div className="container">
          <h2>Regular Counter</h2>
          <h1>{value}</h1>
          <button className="btn" onClick={complexIncrease}>
            increase later
          </button>
        </div>
      </section>
    </>
  );
};

export default useStateCounter;
