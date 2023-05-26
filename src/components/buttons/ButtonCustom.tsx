import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonCustomStyle.module.css';

interface ButtonCustomProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customClass?: string;
  link?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick, customClass, link }) => {
  // Render a button if no link is provided
  if (!link) {
    return (
      <button onClick={onClick} className={`${styles.btn} ${customClass}`}>
        {text}
      </button>
    );
  }

  // Render a link with the provided URL
  return (
    <Link to={link} className={`${styles.btn} ${customClass}`}>
      {text}
    </Link>
  );
};

export default ButtonCustom;
