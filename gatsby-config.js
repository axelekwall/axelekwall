/* eslint-disable @typescript-eslint/camelcase */
const config = require('./src/config/siteConfig')
const ghostConfig = require('./.ghost')
const { apiUrl, contentApiKey } =
  process.env.NODE_ENV === 'development'
    ? ghostConfig.development
    : ghostConfig.production

if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
  throw new Error(
    'GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.'
  ) // eslint-disable-line
}

module.exports = {
  siteMetadata: {
    title: 'axel_ekwall',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/src/content/json`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-source-ghost',
      options:
        process.env.NODE_ENV === 'development'
          ? ghostConfig.development
          : ghostConfig.production,
    },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //           allGhostSettings {
    //               edges {
    //                   node {
    //                       title
    //                       description
    //                   }
    //               }
    //           }
    //       }
    //     `,
    //     feeds: [generateRSSFeed(config)],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'axel ekwall',
        short_name: config.shortTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-offline',
  ],
}
