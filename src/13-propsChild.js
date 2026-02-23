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

//props childern is anything we render between opening and closing tag of the component
function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
          molestiae nulla in necessitatibus dolore ipsa repellat voluptatem sit
          dicta sunt?{" "}
        </p>{" "}
      </Book>
      <Book
        img={secondtBook.img}
        title={secondtBook.title}
        author={secondtBook.author}
      />
    </section>
  );
}

// const Book = ({img, title, author, children}) => {
//    return (
//     <article className="book">
//       <img src={img} alt="" />
//       <h2>{title}</h2>
//       <h5>{author}</h5>
//       {children}
//     </article>
//   );
// };

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h5>{author}</h5>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
