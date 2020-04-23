// import React, { FC } from 'react';
// import { graphql } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import Layout from '../components/Layout';

// interface Frontmatter {
//   title: string;
// }

// interface MdxNode {
//   exerpt: string;
//   body: string;
//   frontmatter: Frontmatter;
// }

// interface Props {
//   data: {
//     file: {
//       childMdx: MdxNode;
//     };
//   };
// }

// const Home: FC<Props> = ({
//   data: {
//     file: { childMdx: page },
//   },
// }) => (
//   <Layout title={page.frontmatter.title}>
//     <MDXRenderer>{page.body}</MDXRenderer>
//   </Layout>
// );

// export const query = graphql`
//   query HomePageQuery {
//     file(sourceInstanceName: { eq: "markdown-pages" }, name: { eq: "index" }) {
//       childMdx {
//         excerpt
//         body
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// `;

// export default Home;
