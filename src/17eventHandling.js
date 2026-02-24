import React from "react";
import ReactDOM from "react-dom/client";
import bookimg from "./bookImg.jpg";
import johnBook from "./johnBook.jpg";
import aw from "./aw.jpg";

// Css
import "./index.css";
import { getByTitle } from "@testing-library/dom";

// Handling event, check react Doc for events
const books = [
  {
    id: 1,
    img: bookimg,
    title: "i love to be in the Moon and Backss",
    author: "amelia hepworth",
  },

  {
    id: 2,
    img: johnBook,
    title: "The Lies They Told ",
    author: "Elisabetunction",
  },
  {
    id: 3,
    img: aw,
    title: "The tech future ",
    author: "Alignia Ware",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // add attribut, eventHandler
  // NB: it most be in camecase EX: onClick, onMouseOver

  //handler
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  //Reference
  // return (
  //   <article className="book">
  //     <img src={img} alt="" />
  //     <h2>{title}</h2>
  //     <h5>{author}</h5>
  //     <button type="button" onClick={clickHandler}>
  //       reference exmaple
  //     </button>
  //   </article>
  // );

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

      {/* if u most pass-in argument u most set it up as an arrow function */}
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
