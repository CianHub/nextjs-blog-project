import React from 'react';
import classes from '../../styles/all-posts.module.css';
import { PostsGrid } from '../../components/posts/PostsGrid';
export const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};
