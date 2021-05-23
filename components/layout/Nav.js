import React from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import classes from '../../styles/main-navigation.module.css';
export const Nav = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        {' '}
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
