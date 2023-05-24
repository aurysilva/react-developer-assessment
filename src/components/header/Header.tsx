import React from 'react';
import './HeaderStyle.css';
import Image from '../image/Image'

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* Place your logo here */}
        <Image src="/path/to/image.jpg" alt="Description of the image" className="custom-image" />
      </div>
      <nav className="navigation">
        {/* Place your navigation links here */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="call-to-action">
        {/* Place your call to action button or content here */}
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
