import React from "react";
import ReactDOM from "react-dom/client";
import bookImg from "./bookImg.jpg";

// Css
import "./index.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => <img src={bookImg} alt="" />;
const Title = () => (
  <h2>The Jasper Brooch : Time Travel Romance (The Celtic Brooch Book 14)</h2>
);

//css-in-js or react also call inline css
const Author = () => (
  <h5 style={{ color: "#617d98", fontSize: "0.8rem", marginTop: "0.25rem" }}>
    Kindle Edition
  </h5>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
