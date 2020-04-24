/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const workPagesQuery = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "work" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                template
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (workPagesQuery.errors) {
    throw new Error(workPagesQuery.errors);
  }

  workPagesQuery.data.allFile.edges.forEach(({ node }) => {
    const { slug, template } = node.childMdx.frontmatter;
    createPage({
      path: slug,
      component: template
        ? path.resolve('src/templates/' + template + '.tsx')
        : path.resolve('src/templates/Work.tsx'),
      context: {
        slug,
      },
    });
  });
};
