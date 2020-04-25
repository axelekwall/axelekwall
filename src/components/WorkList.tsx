import React, { FC } from 'react';
import WorkCard from './WorkCard';
import H1 from './elements/H1';
import { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

interface MdxNode {
  frontmatter: {
    title: string;
    slug: string;
    image: { childImageSharp: { fluid: FluidObject } };
  };
}
interface Data {
  allFile: {
    edges: Array<{
      node: { childMdx: MdxNode };
    }>;
  };
}

const WorkList: FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query WorkQuery {
      allFile(filter: { sourceInstanceName: { eq: "work" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                slug
                image {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      {data.allFile.edges.map(({ node: { childMdx: work } }) => (
        <WorkCard
          slug={work.frontmatter.slug}
          img={work.frontmatter.image.childImageSharp.fluid}
          key={work.frontmatter.slug}
        >
          <H1>{work.frontmatter.title}</H1>
        </WorkCard>
      ))}
    </div>
  );
};

export default WorkList;
