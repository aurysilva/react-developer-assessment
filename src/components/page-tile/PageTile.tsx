import React, { CSSProperties } from 'react';
import './PageTileStyle.module.css';

interface PageTileProps {
  pageTile: string;
  style: CSSProperties;
}

const PageTile: React.FC<PageTileProps> = ({ pageTile, style}) => {
  return <h1 style={style}>{pageTile}</h1>;
};

export default PageTile;
