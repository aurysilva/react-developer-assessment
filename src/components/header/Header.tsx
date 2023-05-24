import React from 'react';
import './HeaderStyle.css';
import Image from '../image/Image';

interface HeaderProps {
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const headerStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <header style={headerStyle}>
      <div className="logo">
        {/* Logo here */}
        <Image maxWidth="120px" alt="Post Logo" className="custom-image" src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png" />
      </div>
      <nav className="navigation">
        {/* Navigation links here */}
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </nav>
      <div className="call-to-action">
        {/* Call to action button or content here */}
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
