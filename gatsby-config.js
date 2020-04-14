/* eslint-disable @typescript-eslint/camelcase */
const config = require('./src/config/siteConfig');

module.exports = {
  siteMetadata: {
    title: 'axel_ekwall',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/content/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/content/json`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: config.contentWidth,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-ackee-tracker',
    //   options: {
    //     // Domatin ID found when adding a domain in the admin panel.
    //     domainId: 'b6a5f337-a58d-432c-811d-ae28d5e35eeb',
    //     // URL to Server eg: "https://analytics.test.com".
    //     server: 'https://stats.minimize.se',
    //     // Disabled analytic tracking when running localy
    //     ignoreLocalhost: true,
    //     // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
    //     detailed: true,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        start_url: config.startUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: config.display,
        icon: config.siteIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
