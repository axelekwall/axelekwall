import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: ${({ theme }) => theme.contentWidth};
  justify-content: flex-start;
  margin-top: 20vh;
  ${({ theme }) => theme.media.phone} {
    margin-top: 10vh;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-self: flex-start;
`;

const About = ({ data: { markdownRemark } }) => (
  <Page>
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
