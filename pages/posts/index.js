import React from 'react';
import { AllPosts } from '../../components/posts/all-posts.js';
import { getAllPosts } from '../../helpers/posts-util';

const Posts = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}

export default Posts;
