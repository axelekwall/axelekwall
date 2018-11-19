import React from 'react';
import { graphql } from "gatsby";

const BlogPost = ({data}) => {
  console.log(data)

  return <div>Blog post</div>;
};

export default BlogPost;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`