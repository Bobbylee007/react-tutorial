import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../02-advance/9-custom-hooks/2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";
// every time props or state changes, component re-render use rect.memo


//functions that takes longtime to calculate or get value(data)
const calculateMostExpensive = (data)=>{
    console.log('hello');
    
    return data.reduce((total, item)=>{
        const price = item.fields.price
        if (price >= total) {
            total = price
        }
        return total
    },0)/100
}
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // if value in fuction change use useCallback
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  },[cart])

  const mostExpensive = useMemo(()=> calculateMostExpensive(products), [products])
  return (
    <>
      <h1>Count:{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart :{cart}</h1>
        <h1>most expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.count("big list called");
  }, []);
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={products.id} {...product} addToCart={addToCart}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart  }) => {
  useEffect(() => {
    console.count("single item called");
  }, []);
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};

export default Index;
