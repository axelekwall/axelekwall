import { FC } from 'react';
import fs from 'fs';
import Layout from '../../components/Layout';
import WorkList, { Work } from '../../components/WorkList';
import H1 from '../../components/elements/H1';
import P from '../../components/elements/P';
import Link from '../../components/Link';
import { GetStaticProps } from 'next';
import { join } from 'path';

interface Props {
  work: Array<Work>;
}

const WorkPage: FC<Props> = ({ work }) => (
  <Layout meta={{ title: 'work' }}>
    <H1>work 🔨</H1>
    <P>This is a selection of projects I have been a part of.</P>
    <WorkList work={work} />
    <Link href="/">Back</Link>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = join(process.cwd(), './src/pages/work');
  const workList = fs.readdirSync(dir);
  const work = await Promise.all(
    workList
      .filter((slug) => slug.includes('.mdx'))
      .map(async (slug) => {
        const page: { meta: Work } = await import('./' + slug);
        return page.meta;
      })
  );
  return {
    props: {
      work,
    },
  };
};

export default WorkPage;
