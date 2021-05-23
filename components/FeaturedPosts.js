import React from 'react';
import classes from '../styles/featured-posts.module.css';
import { PostsGrid } from './posts/PostsGrid';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React framework, that makes full-stack React a breeze.',
    date: '2022/04/08',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React framework, that makes full-stack React a breeze.',
    date: '2022/02/08',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js is the React framework, that makes full-stack React a breeze.',
    date: '2022/05/08',
  },
];
export const FeaturedPosts = ({ posts = DUMMY_POSTS }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
