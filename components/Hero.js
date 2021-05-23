import React from 'react';
import Image from 'next/Image';
import classes from '../styles/hero.module.css';
export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/author.png"
          alt="An image showing Grim Reaper"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm the Grim Reaper</h1>
      <p>This is a blog made with Next.js.</p>
    </section>
  );
};
