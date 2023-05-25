import React, { CSSProperties } from 'react';
import './ImageStyle.module.css';

interface ImageProps {
  maxWidth?: string;
  src: string;
  alt: string;
  customClass?: string;
  radius?: string;
  border?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, customClass, maxWidth, radius, border }) => {
  const style: CSSProperties = {
    maxWidth,
    borderRadius: radius,
    border,
  };

  return <img src={src} alt={alt} className={customClass} style={style} />;
};

export default Image;
