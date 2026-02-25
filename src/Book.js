import React from "react";

//default export, can have only one default
const Book = ({ img, title, author }) => {
  //handler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  // as an in-line function & Reference
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h5>{author}</h5>
      <button type="button" onClick={clickHandler}>
        reference exmaple
      </button>

      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
