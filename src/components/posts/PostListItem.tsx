import React from 'react';

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
    <div>
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <p>{post.publishDate}</p>
      <p>Author: {post.author.name}</p>
      <img src={post.author.avatar} alt="Author Avatar" />
      <ul>
        {post.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostListItem;
