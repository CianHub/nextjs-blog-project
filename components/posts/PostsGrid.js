import React from 'react';
import classes from '../../styles/posts-grid.module.css';
import { PostItem } from './PostItem';
export const PostsGrid = (props) => {
  const { posts = [] } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};
