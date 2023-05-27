import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pageNotFoundStyle.module.css'
import PageTile from '../../page-tile/PageTile';

const PageNotFound: React.FC = () => {
  return (
    <> 
        <PageTile
            pageTile="Page not found!"
            pageSubTile="This Page Can’t Be Found."
            bgImage="https://zerogravitymarketing.com/wp-content/uploads/2022/08/ZGM-Blog-2022-%E2%80%93-1500-x-785-ALL-GRAPHICS-955x500.jpg"
        />

        <div className={styles.containerFlex}>
            <h2>Oops! This Page Can’t Be Found.</h2>
            <p>
              It looks like nothing was found at this location. Maybe try one of the links below or a search?
              <br/><br/><br/>
            </p>
            <button>
              <Link to="/web-projects/react/the-post"> <strong>Go back to home</strong> </Link>
            </button>
        </div> 
    </>
  );
};

export default PageNotFound;
