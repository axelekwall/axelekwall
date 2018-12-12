import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { ContentWrapper, Page, TextRow } from '../components/elements';

const About = ({ data: { markdownRemark } }) => (
  <Page backgroundColor="main">
    <Helmet title={markdownRemark.frontmatter.title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <TextRow>
        <h1 className={'big_title'}>{markdownRemark.frontmatter.title}</h1>
      </TextRow>
    </ContentWrapper>
  </Page>
);

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
