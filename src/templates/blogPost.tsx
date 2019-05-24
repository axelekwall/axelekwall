import React, { FunctionComponent, ReactElement } from 'react';
// import { graphql } from "gatsby";

interface Props {
  data: any;
}

const BlogPost: FunctionComponent<Props> = ({ data }): ReactElement => {
  return <div>Blog post</div>;
};

export default BlogPost;

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
