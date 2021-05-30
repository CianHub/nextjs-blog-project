import React from 'react';
import { PostContent } from '../../components/posts/post-details/PostContent';
import { getPostData, getAllPostPaths } from '../../helpers/posts-util';

const Post = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return { props: { post }, revalidate: 600 };
}

export function getStaticPaths() {
  const slugs = getAllPostPaths().map((path) => path.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export default Post;
