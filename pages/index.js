import React from 'react';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { Hero } from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default HomePage;
