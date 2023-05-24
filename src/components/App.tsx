// import MyComponent from "./posts/MyComponent";
import React from 'react';
import postsData from '../mock/data.json';
import PostList from './posts/PostList';

const App: React.FC = () => {
  return (
    <div>
      {/* Complete the exercise here. */}
      <div>Hello World</div>
      {/* <MyComponent /> */}

      
    <div>
      <h1>Posts</h1>
      <PostList data={postsData} />
    </div>
      
    </div>
  );
};

export default App;
