import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Error Page</h1>
      <div className="container">
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </>
  );
};

export default Error;
