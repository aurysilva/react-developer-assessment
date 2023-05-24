import React from 'react';

interface ImageProps {
  maxWidth?: string;
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, maxWidth }) => {
  const imageStyle = maxWidth ? { maxWidth } : {};

  return <img src={src} alt={alt} className={className} style={imageStyle} />;
};

export default Image;
