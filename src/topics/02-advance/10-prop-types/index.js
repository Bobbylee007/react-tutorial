import React from "react";
import Products from "./Products";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.netlify.app/api/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return <>
        <h2>products</h2>
        <section className="products">
            {products.map((product)=>{
                return <Products key={product.id} {...product} />

            })}

        </section>
  </>;
};

export default Index;
