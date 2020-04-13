import fs from 'fs';
import React, { FC, ReactElement, ReactNode } from 'react';
import { GetStaticProps } from 'next';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import { getContentPath } from '../utils/getPath';
import H1 from '../components/elements/H1';
import P from '../components/elements/P';

interface Props {
  content: string;
}

const renderers: {
  [key: string]: (props: { children: ReactNode }) => ReactElement;
} = {
  heading(props) {
    console.log(props);
    return <H1 font="sans">{props.children}</H1>;
  },
  paragraph({ children }) {
    return <P>{children}</P>;
  },
};

const Home: FC<Props> = ({ content }) => (
  <Layout title="hello">
    <Markdown renderers={renderers}>{content}</Markdown>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = getContentPath('index.md', ['pages']);
  const fileBuffer = fs.readFileSync(path);
  const { content } = matter(fileBuffer);
  return { props: { content } };
};

export default Home;
