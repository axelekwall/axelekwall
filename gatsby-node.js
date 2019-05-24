/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const markdownPagesQuery = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "markdown-pages" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                template
                slug
              }
              html
            }
          }
        }
      }
    }
  `);

  if (markdownPagesQuery.errors) {
    throw new Error(markdownPagesQuery.errors);
  }

  markdownPagesQuery.data.allFile.edges.forEach(({ node }) => {
    const { slug, template } = node.childMarkdownRemark.frontmatter;
    createPage({
      path: slug,
      component: resolve('src/templates/' + template + '.js'),
      // additional data can be passed via context
      context: {
        slug,
      },
    });
  });
};
