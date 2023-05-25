import React, { CSSProperties } from 'react';
import './PageTileStyle.css';

interface PageTileProps {
  pageTile: string;
  style: CSSProperties;
}

const PageTile: React.FC<PageTileProps> = ({ pageTile, style}) => {
  return <h1 style={style}>{pageTile}</h1>;
};

export default PageTile;
