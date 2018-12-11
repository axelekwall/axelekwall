import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

const About = ({ data: { markdownRemark } }) => (
  <div
    css={theme => css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100vw;
      min-height: 100vh;
      background-color: ${theme.colors.main};
    `}
  >
    <Helmet title={markdownRemark.frontmatter.title}>
      <html lang="en" />
    </Helmet>
    <div
      css={theme => css`
        display: flex;
        flex-direction: column;
        width: 80vw;
        max-width: ${theme.contentWidth};
        justify-content: flex-start;
        margin-top: 20vh;
        ${theme.media.phone} {
          margin-top: 10vh;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          width: 100%;
          align-self: flex-start;
        `}
      >
        <h1 className={'big_title'}>{markdownRemark.frontmatter.title}</h1>
      </div>
    </div>
  </div>
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
