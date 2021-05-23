import React from 'react';
import { Nav } from './Nav';

export const Layout = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};
