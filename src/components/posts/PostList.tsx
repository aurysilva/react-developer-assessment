import React, { useState } from 'react';
import PostListItem from './PostListItem';
import './PostListStyle.css';

interface PostsData {
  posts: Post[];
}

interface Post {
  id: string;
  title: string;
  publishDate: string;
  author: {
    name: string;
    avatar: string;
  };
  summary: string;
  categories: {
    id: string;
    name: string;
  }[];
}

interface PostListProps {
  data: PostsData;
}

const PostList: React.FC<PostListProps> = ({ data }) => {
  const { posts } = data;
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, 16));
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const loadMorePosts = () => {
    const currentLength = visiblePosts.length;
    const nextPosts = posts.slice(currentLength, currentLength + 8);

    if (nextPosts.length === 0) {
      setLoadMoreVisible(false);
    }

    setVisiblePosts([...visiblePosts, ...nextPosts]);
  };

  return (
    <div className='post-wrapper'>
      {visiblePosts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
      {loadMoreVisible && (
        <button className="load-more-button" onClick={loadMorePosts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PostList;
