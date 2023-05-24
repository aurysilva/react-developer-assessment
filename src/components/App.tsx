// import MyComponent from "./posts/MyComponent";
import React from 'react';
import postsData from '../mock/data.json';
import PostList from './posts/PostList';
import Header from './header/Header'
import Footer from './footer/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header backgroundColor='#f8e256' />


      {/* Complete the exercise here. */}
      <div>Hello World</div>
      {/* <MyComponent /> */}

      
      <div>
        <h1>Posts</h1>
        <PostList data={postsData} />
      </div>

      <Footer />
      
    </>
  );
};

export default App;
