import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('books');
    } else if (location.pathname === '/categories') {
      setActiveLink('categories');
    }
  }, [location]);

  return (
    <div className="navbar">
      <div className="navItem-container">
        <div className="navbar-item">
          <nav className="nav-link">
            <h1 className="banner">Bookstore CMS</h1>
            <Link to="/" className={`nav-text ${activeLink === 'books' ? 'active' : ''}`}>
              BOOKS
            </Link>
            <Link to="/categories" className={`nav-text ${activeLink === 'categories' ? 'active' : ''}`}>
              CATEGORY
            </Link>
          </nav>
        </div>
        <div className="pro-cont">
          <MdPerson className="profile" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
