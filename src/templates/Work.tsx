import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

interface Frontmatter {
  title: string;
}

interface MdxNode {
  exerpt: string;
  body: string;
  frontmatter: Frontmatter;
}

interface Props {
  data: {
    mdx: MdxNode;
  };
}

const WorkTemplate: FC<Props> = ({ data: { mdx: page } }) => (
  <Layout title={page.frontmatter.title}>
    <MDXRenderer>{page.body}</MDXRenderer>
  </Layout>
);

export const query = graphql`
  query HomePageQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default WorkTemplate;
