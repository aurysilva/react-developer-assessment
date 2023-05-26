import React from 'react';
import PageTile from '../../page-tile/PageTile'; // Importing the PageTile component
import PostList from '../../posts/PostList'; // Importing the PostList component
import postsData from '../../../mock/data.json'; // Importing the posts data

const HomePage: React.FC = () => {
  return (
    <>
      <PageTile
        pageTile="Welcome to THE POST" // The main title for the page tile
        pageSubTile="Explore and discover great articles" // The sub-title for the page tile
        bgImage="https://cdn.flatworldsolutions.com/digital-photography/images/how-to-add-the-parallax-effect-to-your-photos.jpg" // The background image URL for the page tile
      />

      <PostList data={postsData} /> {/* Rendering the PostList component and passing the posts data as a prop */}
    </>
  );
};

export default HomePage;
