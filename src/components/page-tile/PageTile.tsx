import React, { CSSProperties } from 'react';
import styles from './PageTileStyle.module.css';

interface PageTileProps {
  pageTile: string; // The main title of the page tile
  pageSubTile: string; // The sub-title of the page tile
  style?: CSSProperties; // Custom CSS styles for the page tile container
  bgImage?: string; // Background image URL for the page tile container
}

const PageTile: React.FC<PageTileProps> = ({ pageTile, pageSubTile, style, bgImage }) => {
  const containerStyle: CSSProperties = {
    ...style, // Spread the custom styles provided for the page tile container
    background: bgImage ? `url(${bgImage})` : undefined, // Set the background image if it is provided
  };

  return (
    <div className={styles.pageTitle} style={containerStyle}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.pageHeading}>{pageTile}</h1> {/* Render the main title */}
          <p className={styles.pageSubHeading}>{pageSubTile}</p> {/* Render the sub-title */}
        </div>
      </div>
    </div>
  );
};

export default PageTile;