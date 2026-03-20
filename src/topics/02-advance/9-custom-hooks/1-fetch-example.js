import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";


const Example = () => {
  const {loading, products} = useFetch(url)
  console.log(products);

  return (
    <>
      <h2>{loading ? "Loading..." : "data"}</h2>
    </>
  );
};

export default Example;
