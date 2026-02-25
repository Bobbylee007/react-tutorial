import React from "react";
import ReactDOM from "react-dom/client";
import bookimg from "./bookImg.jpg";
import johnBook from "./johnBook.jpg";
import aw from "./aw.jpg";

// Css
import "./index.css";

// Key props and unique value
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
      {/* {books.map((book) => {  //you can add <index> if u are not add or removing item from the list
        return (
          <Book key= {book.id}  book={book}></Book> //special prop <key>
        );
        })} */}

      {books.map((book, index) => {
        //you can add <index> if u are not add or removing item from the list
        return (
          <Book key={index} book={book}></Book> //special prop <key>
        );
      })}


      {/* another way of pass-in props by using spread operator */}
      {/* {books.map((book, index) => {
        return (
          <Book key={index} book={{...book}}></Book> 
        );
      })} */}
      
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
