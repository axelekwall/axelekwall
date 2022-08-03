import WorkCard from './WorkCard';
import H1 from './elements/H1';
import { FC } from 'react';

interface Props {
  work: Array<Work>;
}

export interface Work {
  slug: string;
  image: string;
  title: string;
}

const WorkList: FC<Props> = ({ work }) => {
  return (
    <div>
      {work.map(({ slug, image, title }) => (
        <WorkCard
          alt={`Thumbnail for the ${title} project`}
          slug={slug}
          image={image}
          key={slug}
        >
          <H1>{title}</H1>
        </WorkCard>
      ))}
    </div>
  );
};

export default WorkList;
