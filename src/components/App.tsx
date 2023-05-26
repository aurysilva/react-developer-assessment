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
      <Header backgroundColor="#f8e256" /> {/* Renders the header component with a specific background color */}

      <Routes>
        <Route path="/web-projects/react/the-post/" element={<HomePage />} /> {/* Renders the HomePage component when the path is '/' */}
        <Route path="/web-projects/react/the-post/about" element={<AboutPage />} /> {/* Renders the AboutPage component when the path is '/about' */}
        <Route path="/web-projects/react/the-post/contact" element={<ContactPage />} /> {/* Renders the ContactPage component when the path is '/contact' */}
        <Route path="/web-projects/react/the-post/posts/:postId" element={<PostDetails postsData={postsData} />} /> {/* Renders the PostDetails component with the specified post data when the path matches '/posts/:postId' */}
      </Routes>

      <Footer /> {/* Renders the footer component */}
    </Router>
  );
};

export default App;
