import React from "react";
import ReactDOM from "react-dom/client";
import bookimg from "./bookImg.jpg";
import johnBook from "./johnBook.jpg";

// Css
import "./index.css";
import { jsx } from "react/jsx-runtime";

// data and list
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
];

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

function Booklist() {
  // JSX doesnt allow object only varables
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
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
