import React, { FC } from 'react';
import WorkCard from './WorkCard';
import H1 from './elements/H1';
import { FluidObject } from 'gatsby-image';

interface Props {
  data: Array<{
    frontmatter: {
      title: string;
      slug: string;
      image: { childImageSharp: { fluid: FluidObject } };
    };
  }>;
}

const WorkList: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map((work) => (
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
