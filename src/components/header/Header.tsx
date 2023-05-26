import React from 'react';
import styles from './HeaderStyle.module.css';
import Image from '../image/Image';
import ButtonCustom from '../buttons/ButtonCustom';
import NavigationBar from '../navigation/NavigationBar';
import { Link } from 'react-router-dom';

interface HeaderProps {
  backgroundColor?: string; // Optional background color for the header
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  // Set the header background color if provided
  const headerBGColor = backgroundColor ? { backgroundColor } : {};

  return (
    <header style={headerBGColor}>
      <div className={styles.containerFlex}>
        {/* Render the logo image */}
        <Link to={'/'}>
          <Image
            maxWidth='120px'
            alt="Post Logo"
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png"
          />
        </Link>
        {/* Render the navigation bar */}
        <NavigationBar /> 
        {/* Render the "Get in touch" button */}
        <ButtonCustom text="Get in touch" customClass={`${styles.bgDark}`} link="/contact" />
        {/* 
          The above line uses the ButtonCustom component to render a button with the following properties:
          - Text: "Get in touch"
          - Custom CSS class: "bgDark"
          - Link: "/contact"
        */}
      </div>
    </header>
  );
};

export default Header;
