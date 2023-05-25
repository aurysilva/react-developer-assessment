import React from 'react';
import postsData from '../mock/data.json';
import PostList from './posts/PostList';
import Header from './header/Header';
import Footer from './footer/Footer';
import PageTile from './page-tile/PageTile';

const App: React.FC = () => {
  return (
    <>
      <Header backgroundColor="#f8e256" />

      <div>
        <PageTile pageTile="Latest Posts" style={{textAlign: 'center', textDecoration: 'underline'}} />
        <PostList data={postsData} />
      </div>

      <Footer />
    </>
  );
};

export default App;
