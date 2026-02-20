import React from "react";
import ReactDOM from "react-dom/client";
import bookImg from "./bookImg.jpg";

// Css
import "./index.css";
// setup vars
const author = "Kindle Edition";
const title = "i love to be in the Moon and Backss";


function Booklist() {
  //here we are rendering or invoking the Book we passing argument value for props
  return (
    <section className="booklist">
      <Book job='developer'/>
      <Book ttile="random title" number={22} />
    </section>
  );
}

//Book here is a func that can take in params call props
const Book = (props) => {
  console.log(props);
  
  return (
    <article className="book">
      <img src={bookImg} alt="" />;<h2>{title}</h2>
      <h5>{author}</h5>
      {/* {console.log(props)} can also console.log() in JSX*/}
      
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
