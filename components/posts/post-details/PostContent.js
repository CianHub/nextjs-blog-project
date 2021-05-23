import React from 'react';
import classes from '../../../styles/post-content.module.css';
import { PostHeader } from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With Next.js',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022/04/08',
};

export const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};
