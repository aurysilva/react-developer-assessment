import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PostDetailsStyle.module.css';
import PageTile from '../../page-tile/PageTile';

interface PostDetailsProps {
  postsData: PostsData; // Props interface for the PostDetails component
}

interface PostsData {
  posts: Post[]; // Interface defining the structure of the posts data
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
  const { postId } = useParams<{ postId: string }>(); // Extracting the postId from the URL parameters
  const post = postsData.posts.find((post) => post.id === postId); // Finding the post with the matching postId

  if (!post) {
    // If the post is not found, render a "Post not found" message
    return (
      <div className={styles.container}>
        <h2>Post not found</h2>
        <p>Unfortunately, there is nothing here</p>
        <Link to="/">Go back to home</Link> {/* Link to navigate back to the home page */}
      </div>
    );
  }

  const { title, author, categories } = post; // Destructuring the post data

  return (
    <>
      <PageTile
        pageTile="Post Details" // The main title for the page tile
        pageSubTile={categories[0].name} // The sub-title for the page tile, using the first category name
        bgImage="https://www.aurysilva.co.uk/wp-content/uploads/2021/11/jess-bailey-q10VITrVYUM-unsplash-scaled.jpg" // The background image URL for the page tile
      />

      <div className={styles.container}>
        <h2>{title}</h2> {/* Displaying the post title */}
        <p>Author: {author.name}</p> {/* Displaying the author's name */}
      </div>
    </>
  );
};

export default PostDetails;
