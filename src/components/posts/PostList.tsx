import React from 'react';
import PostListItem from './PostListItem';

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

  return (
    <div>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
