import React, { CSSProperties } from 'react';
import './ImageStyle.module.css';

interface ImageProps {
  maxWidth?: string; // Maximum width of the image
  src: string; // Source URL of the image
  alt: string; // Alternative text for the image
  customClass?: string; // Custom CSS class for the image
  radius?: string; // Border radius of the image
  border?: string; // Border style of the image
}

const Image: React.FC<ImageProps> = ({ src, alt, customClass, maxWidth, radius, border }) => {
  const style: CSSProperties = {
    maxWidth, // Set the maximum width of the image if provided
    borderRadius: radius, // Set the border radius of the image if provided
    border, // Set the border style of the image if provided
  };

  return <img src={src} alt={alt} className={customClass} style={style} />;
};

export default Image;
