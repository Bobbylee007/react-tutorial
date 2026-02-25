import React from "react";
import ReactDOM from "react-dom/client";
import bookImg from "./bookImg.jpg";

// Css
import "./index.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Kindle Edition";
const Book = () => {
  const title = "i love to be in the Moon and Backss";
  return (
    <article className="book">
      <img src={bookImg} alt="" />;<h2>{title}</h2>
      <h5>{author.toUpperCase()}</h5>
      {/* <p>{let x = 6}</p> this will give error, cant write statement only expression in JSX;  JSX comments*/}
      <p>{6 + 6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
