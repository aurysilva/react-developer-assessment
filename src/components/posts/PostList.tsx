import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom'; 
import styles from './PostListStyle.module.css'
import PostListItem from './PostListItem';
import ButtonCustom from '../buttons/ButtonCustom';

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
  const [visiblePosts, setVisiblePosts] = useState(12);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  return (
    <>
      <TransitionGroup className={styles.postWrapper}>
        {posts.slice(0, visiblePosts).map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post-item">
            <Link to={`/posts/${post.id}`}>
              <PostListItem post={post} />
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {visiblePosts < posts.length && (
        <div className={styles.loadMoreButton}>
          <ButtonCustom customClass={`${styles.bgYellow} ${styles.border}`} text={'Load More'} onClick={handleLoadMore}/>
        </div>
      )}
    </>
  );
};

export default PostList;
