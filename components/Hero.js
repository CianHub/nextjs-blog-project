import React from 'react';
import classes from '../styles/hero.module.css';
export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}></div>
      <h1>Hi, I'm Cian</h1>
      <p>This is a blog made with Next.js for fun.</p>
    </section>
  );
};
