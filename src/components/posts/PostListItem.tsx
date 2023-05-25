import React from 'react';
import styles from './PostListItemStyle.module.css';
import Image from '../image/Image';

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

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <div className={`${styles.postItem}`}>
      <h2 className={`${styles.truncate} ${styles.truncateLineTwo}`}>{post.title}</h2>
      <p className={`${styles.truncate} ${styles.truncateLineTwo}`}>{post.summary}</p>
      
      <div className={`${styles.flex}`}>
        <Image src={post.author.avatar} alt="Author Avatar" maxWidth="50px" radius="50%" border="1px solid #c7c7c7" />
        <div className={styles.authorDetails}>
          <p>Author: {post.author.name}</p>
          {/* <p>{post.publishDate}</p> */}
        </div>
      </div>

      {/* These are post categories (wasn't sure to show on the front end) */}
      {/* <ul>
        {post.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default PostListItem;
