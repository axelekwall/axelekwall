import React, { FunctionComponent, ReactElement } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { FlexRow, FlexContainer } from '../components/elements';
import Layout from '../components/Layout';
import Facts from '../components/Facts';
import BreakPoint from '../components/BreakPoint';

const AboutImg = styled(Img)`
  display: flex;
  width: 50%;
  align-self: center;
`;

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        image: string;
        github: string;
      };
      html: string;
    };
  };
}

const About: FunctionComponent<Props> = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  },
}): ReactElement => (
  <Layout title={title}>
    <FlexRow justify="space-around">
      <BreakPoint show={false} breakPoint={'tablet'}>
        <AboutImg
          imgStyle={{
            objectPosition: 'center right',
          }}
          fixed={image.childImageSharp.fixed}
        />
      </BreakPoint>
      <FlexContainer desktopWidth="50%" alignSelf="center">
        <Facts />
      </FlexContainer>
    </FlexRow>
    <FlexRow>
      <FlexContainer dangerouslySetInnerHTML={{ __html: html }} />
    </FlexRow>
  </Layout>
);

export default About;

export const pageQuery = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        github
        image {
          childImageSharp {
            fixed(width: 350) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      html
    }
  }
`;
