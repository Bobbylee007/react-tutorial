import React from "react";
import ReactDOM from "react-dom/client";
import bookimg from "./bookImg.jpg";
import johnBook from "./johnBook.jpg";

// Css
import "./index.css";
// setup vars
const firstBook = {
  img: bookimg,
  title: "i love to be in the Moon and Backss",
  author: "amelia hepworth",
};

const secondtBook = {
  img: johnBook,
  title: "The Lies They Told ",
  author: "Elisabeth Rodgers",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondtBook.img}
        title={secondtBook.title}
        author={secondtBook.author}
      />
    </section>
  );
}

// two alternative way to access props

// 1. destructuring

// const Book = (props) => {
//   const {img, title, author} = props
//    return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h2>{title}</h2>
//       <h5>{author}</h5>
//     </article>
//   );
// };

// 2. parse-in object as props
const Book = ({ img, title, author }) => {
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
