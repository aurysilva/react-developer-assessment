import React, { CSSProperties } from 'react';
import styles from './PageTileStyle.module.css';

interface PageTileProps {
  pageTile: string;
  pageSubTile: string;
  style?: CSSProperties;
  bgImage?: string;
}

const PageTile: React.FC<PageTileProps> = ({ pageTile, pageSubTile, style, bgImage }) => {
  const containerStyle: CSSProperties = {
    ...style,
    background: bgImage ? `url(${bgImage})` : undefined,
  };

  return (
    <div className={styles.pageTitle} style={containerStyle}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.pageHeading}>{pageTile}</h1>
          <p className={styles.pageSubHeading}>{pageSubTile}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTile;