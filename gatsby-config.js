module.exports = {
  siteMetadata: {
    title: 'axel ekwall',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'IBM Plex Sans',
            variants: ['300', '400', '500'],
          },
          {
            family: 'IBM Plex Serif',
            variants: ['300', '400', '500'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'axel ekwall',
        short_name: 'a_e',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        // TODO: Change next line to match icon
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
};
