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

const getAllPosts = () => {
  const postFileNames = fs.readdirSync(postsDirectory);
  return postFileNames.map((fileName) => getPostData(fileName));
};
