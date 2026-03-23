import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../asset/bookImg.jpg";

const Products = ({ image, name, price }) => {
  // since some of the data over the wire is missing u get an error
  // we are getting the property of the object that why u have error
  // solution: is to return static value
  // solution: setup default value and import prop-types

  console.log(image, name, price); //to see those with undefined

  // EX:2 using OR or AND
  const url = image && image.url
  return (
    <article className="product">
      <h4>single product</h4>
      <img src={url|| defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );


//   return (
//     <article className="product">
//       <h4>single product</h4>
//       <img src={image.url || defaultImage} alt={name} />
//       <h4>{name}</h4>
//       <p>${price || 3.99}</p>
//     </article>
//   );

//   return (
//     <article className="product">
//       <h4>single product</h4>

//       <img src={image.url} alt={name} />
//       <h4>{name}</h4>
//       <p>${price}</p>
//     </article>
//   );
};

Products.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//  EX:1
// Products.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };



export default Products;
