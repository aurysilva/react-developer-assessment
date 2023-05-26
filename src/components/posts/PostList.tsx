import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './PostListStyle.module.css';
import PostListItem from './PostListItem';
import ButtonCustom from '../buttons/ButtonCustom';
import SearchComponent from '../search/Search';

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

interface PostListProps {
  data: PostsData; // Props interface for the PostList component
}

const PostList: React.FC<PostListProps> = ({ data }) => {
  const { posts } = data; // Destructuring the posts data
  const [visiblePosts, setVisiblePosts] = useState(12); // State for the number of visible posts
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts); // State for the filtered posts

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4); // Increase the number of visible posts when the load more button is clicked
  };

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase(); // Convert the search query to lowercase for case-insensitive search
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(lowerCaseQuery) // Filter the posts based on the search query matching the post title
    );
    setFilteredPosts(filtered); // Update the filtered posts
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} /> {/* Search component for filtering the posts */}

      <TransitionGroup className={styles.postWrapper}>
        {/* Render the filtered posts with transitions */}
        {filteredPosts.slice(0, visiblePosts).map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post-item">
            <Link to={`/web-projects/react/the-post/posts/${post.id}`}>
              <PostListItem post={post} /> {/* Render the PostListItem component for each post */}
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {/* Render the "Load More" button if there are more posts to load */}
      {visiblePosts < filteredPosts.length && (
        <div className={styles.loadMoreButton}>
          <ButtonCustom
            customClass={`${styles.bgYellow} ${styles.border}`}
            text={'Load More'} // Button text
            onClick={handleLoadMore} // Click event handler for loading more posts
          />
        </div>
      )}
    </>
  );
};

export default PostList;
