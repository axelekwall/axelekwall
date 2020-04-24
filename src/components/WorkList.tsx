import React, { FC } from 'react';

interface Props {
  data: Array<{
    frontmatter: { title: string; slug: string };
  }>;
}

const WorkList: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((work) => (
        <div key={work.frontmatter.slug}>{work.frontmatter.title}</div>
      ))}
    </div>
  );
};

export default WorkList;
