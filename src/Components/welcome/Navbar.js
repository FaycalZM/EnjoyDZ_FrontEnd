import React from 'react';


function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/search">search</a></li>
        <li><a href="/contact">contact us</a></li>
      </ul>
      <div classname="login-buttons">
        <button classname="connect-button">connect</button>
        <button classname="login-button">login</button>
      </div>
    </nav>
  );
}
export default Navbar;