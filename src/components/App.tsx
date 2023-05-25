import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import postsData from '../mock/data.json';
import Header from './header/Header';
import Footer from './footer/Footer';
import PostDetails from './pages/post-detail/PostDetails';
import '../global-style/GlobalStyle.module.css';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/about/About';
import ContactPage from './pages/contact/Contact';

const App: FC = () => {
  return (
    <Router>
      <>
        <Header backgroundColor="#f8e256" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts/:postId" element={<PostDetails postsData={postsData} />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
};

export default App;
