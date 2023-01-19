import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-item">
      <nav className="nav-link">
        <h1 className="banner">Bookstore CMS</h1>
        <Link to="/" className="">
          Books
        </Link>
        <Link to="/categories" className="">
          Categories
        </Link>
      </nav>
    </div>

    <div className="profile">
      profile picture
    </div>
  </div>
);
export default Navbar;
