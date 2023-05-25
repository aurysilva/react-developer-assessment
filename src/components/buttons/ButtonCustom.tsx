import React, { MouseEventHandler } from 'react';

interface ButtonCustomProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customClass?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick, customClass }) => {
  return (
    <button onClick={onClick} className={`${customClass}`}>{text}</button>
  );
};

export default ButtonCustom;
