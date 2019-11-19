import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
// import Link from '../components/Link';

// const subTitle = (
//   <>
//     My name is{' '}
//     <Link to="/about">
//       <b>Axel Ekwall</b>
//     </Link>
//     . I am a media technology{' '}
//     <Link to="/education">
//       <b>student</b>
//     </Link>{' '}
//     at KTH Royal Institute of Technology in Stockholm, working as a{' '}
//     <Link to="/work">
//       <b>developer</b>
//     </Link>
//     . I am also doing{' '}
//     <Link to="/photography">
//       <b>photography</b>
//     </Link>{' '}
//     and{' '}
//     <Link to="/work">
//       <b>experience design</b>
//     </Link>
//     .
//   </>
// );

// const IndexPage: FunctionComponent = () => (
//   <Layout title="hello," subTitle={subTitle} />
// );

const subTitle = 'Updated website coming soon...';

const IndexPage: FunctionComponent = () => (
  <Layout hideNav title="hello," subTitle={subTitle} />
);

export default IndexPage;
