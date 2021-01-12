import WorkCard from './WorkCard';
import H1 from './elements/H1';
import { FC } from 'react';

interface Props {
  work: Array<Work>;
}

export interface Work {
  slug: string;
  img: string;
  title: string;
}

const WorkList: FC<Props> = ({ work }) => {
  return (
    <div>
      {work.map(({ slug, img, title }) => (
        <WorkCard slug={slug} img={img} key={slug}>
          <H1>{title}</H1>
        </WorkCard>
      ))}
    </div>
  );
};

export default WorkList;
