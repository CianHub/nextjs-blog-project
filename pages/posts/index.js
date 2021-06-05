import React from 'react';
import { AllPosts } from '../../components/posts/all-posts.js';
import { getAllPosts } from '../../helpers/posts-util';
import Head from 'next/head';

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts"></meta>
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}

export default Posts;
