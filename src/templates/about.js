import React from 'react';
import { graphql } from 'gatsby';

const About = ({ data }) => <div>{data.markdownRemark.frontmatter.title}</div>;

export default About;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
