import React from 'react';
import styles from './HeaderStyle.module.css'; // Import the CSS module
import Image from '../image/Image';
import ButtonCustom from '../buttons/ButtonCustom';



const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const headerBGColor = backgroundColor ? { backgroundColor } : {};

  return (
    <header style={headerBGColor}>
      <div className={styles.container}> {/* Use the styles.container class */}
        <div className={styles.logo}> {/* Use the styles.logo class */}
          {/* Logo here */}
          <Image
            maxWidth="120px"
            alt="Post Logo"
            className={styles.logoImage} {/* Add a new class name for the image */}
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png"
          />
        </div>
        <nav className={styles.navigation}> {/* Use the styles.navigation class */}
          {/* Navigation links here */}
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </nav>
        <div className={styles.callToAction}> {/* Use the styles.callToAction class */}
          {/* Call to action button or content here */}
          <ButtonCustom className={`${styles.button} ${styles.darkButton}`} text={'Get in touch'} /> {/* Use multiple class names */}
        </div>
      </div>
    </header>
  );
};
