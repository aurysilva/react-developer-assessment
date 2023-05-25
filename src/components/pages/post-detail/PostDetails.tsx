import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostDetailsStyle.module.css'

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
    return <div className={`${styles.container}`}> <h1>Post not found</h1> <p>Unfotunately there is nothing here</p> </div>;      
  }

  const { title, author } = post;

  return (
    <div className={`${styles.container}`}>
      <h2>{title}</h2>
      <p>Author: {author.name}</p>
    </div>
  );
};

export default PostDetails;
