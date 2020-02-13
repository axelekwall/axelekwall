import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import Layout from '../components/Layout';
import Facts from '../components/Facts';
import BreakPoint from '../components/BreakPoint';
import FlexRow from '../components/elements/FlexRow';
import FlexContainer from '../components/elements/FlexContainer';
import { Image } from '../types/query';

const AboutImg = styled(Img)`
  display: flex;
  width: 50%;
  align-self: center;
`;

interface Data {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        title: string;
        image: Image;
        github: string;
      };
      html: string;
    };
  };
}

const About: FunctionComponent = () => {
  const {
    file: {
      childMarkdownRemark: { frontmatter, html },
    },
  } = useStaticQuery<Data>(graphql`
    query {
      file(base: { eq: "about.md" }) {
        childMarkdownRemark {
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
    }
  `);
  return (
    <Layout title={frontmatter.title}>
      <FlexRow justify="space-around">
        <BreakPoint show={false} breakPoint={'tablet'}>
          <AboutImg
            imgStyle={{
              objectPosition: 'center right',
            }}
            fixed={frontmatter.image.childImageSharp.fixed}
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
};
export default About;
