import React from "react";
import ReactDOM from "react-dom/client";
import bookImg from "./bookImg.jpg";

function Booklist() {
  return (
    <section>
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
    <article>
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
const Author = () => <h5>Kindle Edition</h5>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
