import React from 'react';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { Hero } from '../components/Hero';
import { getFeaturedPosts } from '../helpers/posts-util';
import Head from 'next/head';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Next.JS Blog</title>
        <meta name="description" content="A blog made with Next JS"></meta>
      </Head>
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
