import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

function PageTail() {
  return (
    <footer>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit dui id dolor tincidunt, at mattis neque luctus.</p>
      </div>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <ul className="services-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="image">
        <img src="image.jpg" alt="Image" />
      </div>
    </footer>
  );
}

export default PageTail;

