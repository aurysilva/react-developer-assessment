import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PostDetailsStyle.module.css';
import PageTile from '../../page-tile/PageTile';

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
    return (
      <div className={styles.container}>
        <h1>Post not found</h1>
        <p>Unfortunately, there is nothing here</p>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }

  const { title, author, categories } = post;

  return (
    <>
      <PageTile
        pageTile="Post Details"
        pageSubTile={categories[0].name}
        bgImage="https://www.aurysilva.co.uk/wp-content/uploads/2021/11/jess-bailey-q10VITrVYUM-unsplash-scaled.jpg"
      />

      <div className={styles.container}>
        <h2>{title}</h2>
        <p>Author: {author.name}</p>
      </div>
    </>
  );
};

export default PostDetails;
