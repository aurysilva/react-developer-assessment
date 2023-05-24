// import React, { CSSProperties } from 'react';
import './ButtonCustomStyle.css';

interface ButtonCustomProps {
  text: string;
  // onClick: MouseEventHandler<HTMLButtonElement>;
  // style?: CSSProperties;
  className?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, className }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

export default ButtonCustom;
