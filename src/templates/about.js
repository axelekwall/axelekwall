import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FlexRow } from '../components/elements';
import Layout from '../components/Layout';

const AboutImg = styled(Img)`
  position: relative;
  display: flex;
  width: 450px;
  right: 50px;
  overflow: visible;
`;

const AboutText = styled.div`
  display: flex;
  width: 450px;
  padding: 5%;
  align-self: center;
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  },
}) => (
  <Layout backgroundColor="main" title={title}>
    <FlexRow>
      <AboutImg
        imgStyle={{
          objectPosition: 'center right',
        }}
        fixed={image.childImageSharp.fixed}
      />
      <AboutText>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </AboutText>
    </FlexRow>
  </Layout>
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
