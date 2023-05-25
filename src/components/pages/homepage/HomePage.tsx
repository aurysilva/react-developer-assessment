import React from 'react';
import PageTile from '../../page-tile/PageTile';
import PostList from '../../posts/PostList';
import postsData from '../../../mock/data.json';

const HomePage: React.FC = () => {
  return (
    <>
        <PageTile
            pageTile="Welcome to THE POST"
            pageSubTile="Explore and discover great articles"
            bgImage="https://cdn.flatworldsolutions.com/digital-photography/images/how-to-add-the-parallax-effect-to-your-photos.jpg"
        />

        <PostList data={postsData} />
    </>
  );
};

export default HomePage;
