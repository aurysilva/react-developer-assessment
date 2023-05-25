import React from 'react';
import styles from './HeaderStyle.module.css';
import Image from '../image/Image';
import ButtonCustom from '../buttons/ButtonCustom';
import NavigationBar from '../navigation/NavigationBar';

interface HeaderProps {
  backgroundColor?: string;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor }) => {
  const headerBGColor = backgroundColor ? { backgroundColor } : {};

  return (
    <header style={headerBGColor}>
      <div className={styles.containerFlex}>
          <Image
            maxWidth='120px'
            alt="Post Logo"
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa694e2d3-0da4-4c05-a410-1aa64dc2c772_5001x1460.png"
          />
        <NavigationBar /> 
        <ButtonCustom customClass={styles.bgDark} text={'Get in touch'} />
      </div>
    </header>
  );
};

export default Header;
