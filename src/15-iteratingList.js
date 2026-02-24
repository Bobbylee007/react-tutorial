import React from "react";
import ReactDOM from "react-dom/client";
import bookimg from "./bookImg.jpg";
import johnBook from "./johnBook.jpg";
import aw from "./aw.jpg";

// Css
import "./index.css";

// iterating over data or list
const books = [
  {
    img: bookimg,
    title: "i love to be in the Moon and Backss",
    author: "amelia hepworth",
  },

  {
    img: johnBook,
    title: "The Lies They Told ",
    author: "Elisabetunction",
  },
  {
    img: aw,
    title: "The tech future ",
    author: "Alignia Ware",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // console.log(book); or remove
        // const { img, author, title } = book; //comment if var is not used or removed

        return (
          <Book book={book}></Book> //added book as a props
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book; // settup props and properties we looking for (book)
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h5>{author}</h5>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
