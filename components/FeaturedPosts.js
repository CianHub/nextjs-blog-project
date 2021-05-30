import React from 'react';
import classes from '../styles/featured-posts.module.css';
import { PostsGrid } from './posts/PostsGrid';

export const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
