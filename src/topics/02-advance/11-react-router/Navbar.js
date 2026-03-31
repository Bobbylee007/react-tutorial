import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="item">
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to="/about">About us</Link>
          </li>
          <li className="links">
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
