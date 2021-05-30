import React from 'react';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { Hero } from '../components/Hero';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}

export default HomePage;
