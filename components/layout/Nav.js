import React from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import classes from '../../styles/main-navigation.module.css';
export const Nav = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  );
};
