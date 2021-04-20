import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/calculator" className="nav-link">Calculator</Link>
          </li>
          <li>
            <Link to="/quete" className="nav-link">Quete</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
export default NavBar;
