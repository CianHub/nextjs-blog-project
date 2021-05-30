import React from 'react';
import classes from '../../styles/post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({ post }) => {
  const formattedDate = new Date(post.data.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${post.slug}/${post.data.image}`;

  return (
    <>
      <li className={classes.post}>
        <Link href={`/posts/${post.slug}`}>
          <a>
            <div className={classes.image}>
              <Image
                layout="responsive"
                src={imagePath}
                alt={post.data.title}
                width={300}
                height={200}
              />
            </div>
            <div className={classes.content}>
              <h3>{post.data.title}</h3>
              <time>{formattedDate}</time>
              <p>{post.data.excerpt}</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
};

export default PostItem;
