import React from "react";
import ReactDOM from "react-dom/client";

// JSX Rules
// return a single element
// div/ section / article or fragment
// use camelCase for html attribute
// return a single element
// formatting

function Greeting() {
  return (
    <main>
      <section>
        <article>
          <h1>hello world</h1>
          <ul>
            <li>
              <a href="#">hello world</a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
