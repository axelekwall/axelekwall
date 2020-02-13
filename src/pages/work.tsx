import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import FlexRow from '../components/elements/FlexRow';
import FlexContainer from '../components/elements/FlexContainer';
import { Image } from '../types/query';

interface Data {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
  allMarkdownRemark: {
    edges: Array<{
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          slug: string;
          image: Image;
        };
      };
    }>;
  };
}

const Work: FunctionComponent = () => {
  const data = useStaticQuery<Data>(graphql`
    query {
      file(base: { eq: "work.md" }) {
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
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "work" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);
  return (
    <Layout title={data.file.childMarkdownRemark.frontmatter.title}>
      <FlexRow>
        <FlexContainer
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </FlexRow>
      <FlexRow>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <FlexContainer key={node.id} desktopWidth="50%" tabletWidth="50%">
            <Card data={node} />
          </FlexContainer>
        ))}
      </FlexRow>
    </Layout>
  );
};

export default Work;
