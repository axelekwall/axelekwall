import { FC } from 'react';
import fs from 'fs';
import Layout from '../../components/Layout';
import WorkList, { Work } from '../../components/WorkList';
import H1 from '../../components/elements/H1';
import { GetStaticProps } from 'next';
import { join } from 'path';

interface Props {
  work: Array<Work>;
}

const WorkPage: FC<Props> = ({ work }) => (
  <Layout>
    <H1>work 🔨</H1>
    <WorkList work={work} />
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = join(process.cwd(), './src/pages/work');
  const workList = fs.readdirSync(dir);
  console.log(workList);
  const work = await Promise.all(
    workList
      .filter((slug) => slug.includes('.mdx'))
      .map(async (slug) => {
        const page = await import('./' + slug);
        const path = join(dir, '.mdx');
        return page;
      })
  );
  console.log(work[0].meta);
  return {
    props: {
      work: [],
    },
  };
};

export default WorkPage;
