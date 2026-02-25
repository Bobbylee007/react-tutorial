import React from "react";
import ReactDOM from "react-dom/client";


// Css
import "./index.css";

// imports and export
import { books } from "./books";
import Book from "./Book";
import {greeting} from "./testing/testing";

function Booklist() {
  console.log(greeting);
  
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return  <Book key={book.id}
         {...book}></Book>;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
