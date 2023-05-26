import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './PostListStyle.module.css';
import PostListItem from './PostListItem';
import ButtonCustom from '../buttons/ButtonCustom';
import SearchComponent from '../search/Search';

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
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4);
  };

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} />

      <TransitionGroup className={styles.postWrapper}>
        {filteredPosts.slice(0, visiblePosts).map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post-item">
            <Link to={`/posts/${post.id}`}>
              <PostListItem post={post} />
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {visiblePosts < filteredPosts.length && (
        <div className={styles.loadMoreButton}>
          <ButtonCustom
            customClass={`${styles.bgYellow} ${styles.border}`}
            text={'Load More'}
            onClick={handleLoadMore}
          />
        </div>
      )}
    </>
  );
};

export default PostList;
