import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = fileName.replace(/\.md$/, '');

  return { data, content, slug };
};

export const getAllPosts = () => {
  const postFileNames = fs.readdirSync(postsDirectory);
  const postFileData = postFileNames.map((fileName) => getPostData(fileName));

  const sortedPostFileData = postFileData.sort((postA, postB) => {
    return postA.data.date > postB.data.date ? -1 : 1;
  });

  return sortedPostFileData;
};

export const getFeaturedPosts = () => {
  const posts = getAllPosts().filter((post) => post.data.isFeatured);

  return posts;
};
