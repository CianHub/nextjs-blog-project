import React from 'react';
import classes from '../../styles/post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const PostItem = ({ post }) => {
  const formattedDate = new Date(post?.date).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${post.slug}`;

  return (
    <li className={classes.post}>
      <Link href={post.link}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={post.title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>{formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
