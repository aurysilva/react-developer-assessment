import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import postsData from '../mock/data.json';
import PostList from './posts/PostList';
import Header from './header/Header';
import Footer from './footer/Footer';
import PageTile from './page-tile/PageTile';
import PostDetails from './pages/post-detail/PostDetails';

const App: FC = () => {
  return (
    <Router>
      <>
        <Header backgroundColor="#f8e256" />

        <div>
          <PageTile pageTile="Latest Posts" style={{ textAlign: 'center', textDecoration: 'underline' }} />
          <Routes>
            <Route path="/" element={<PostList data={postsData} />} />
            <Route
              path="/posts/:postId"
              element={<PostDetails postsData={postsData} />} // Pass the postsData prop
            />
          </Routes>
        </div>

        <Footer />
      </>
    </Router>
  );
};

export default App;
