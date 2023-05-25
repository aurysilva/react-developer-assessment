import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailsStyle.module.css'

interface PostDetailsProps {
  postsData: PostsData;
}

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

const PostDetails: FC<PostDetailsProps> = ({ postsData }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = postsData.posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, author } = post;

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>Author: {author.name}</p>
    </div>
  );
};

export default PostDetails;
