import React from 'react';
import classes from '../../styles/posts-grid.module.css';
import PostItem from './PostItem';
export const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};
