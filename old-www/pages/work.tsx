import fs from 'fs';
import Layout from '../src/components/Layout';
import WorkList, { Work } from '../src/components/WorkList';
import H1 from '../src/components/elements/H1';
import P from '../src/components/elements/P';
import Link from '../src/components/Link';
import { GetStaticProps } from 'next';
import { join } from 'path';
import { FComp } from '../src/types';

interface Props {
  work: Array<Work>;
}

const WorkPage: FComp<Props> = ({ work }) => (
  <Layout meta={{ title: 'work' }}>
    <H1>work 🔨</H1>
    <P>This is a selection of projects I have been a part of.</P>
    <WorkList work={work} />
    <Link href="/">Back</Link>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = join(process.cwd(), './pages/work');
  const workList = fs.readdirSync(dir);
  const work = await Promise.all(
    workList.map(async (slug) => {
      const page: { meta: Work } = await import('./work/' + slug);
      return { ...page.meta, slug: `/work/${slug.replace('.mdx', '')}` };
    })
  );
  return {
    props: {
      work,
    },
  };
};

export default WorkPage;
