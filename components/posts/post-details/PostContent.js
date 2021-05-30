import React from 'react';
import classes from '../../../styles/post-content.module.css';
import { PostHeader } from './PostHeader';
import ReactMarkdown from 'react-markdown';

export const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.data.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.data.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
