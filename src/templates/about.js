import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { ContentWrapper, Page, TextRow } from '../components/elements';

const ImageRow = styled.div`
  position: relative;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  overflow-x: visible;
`;

const About = ({ data: { markdownRemark } }) => (
  <Page backgroundColor="main">
    <Helmet title={markdownRemark.frontmatter.title}>
      <html lang="en" />
    </Helmet>
    <ContentWrapper>
      <TextRow>
        <h1 className={'big_title'}>{markdownRemark.frontmatter.title}</h1>
      </TextRow>
      <ImageRow>
        <Img
          style={{
            position: 'absolute',
            display: 'flex',
            width: '450px',
            right: '50%',
            overflow: 'visible',
          }}
          imgStyle={{}}
          fixed={markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '5%',
            selfAlign: 'flex-end',
            zIndex: 10,
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </ImageRow>
    </ContentWrapper>
  </Page>
);

export default About;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 450) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`;
