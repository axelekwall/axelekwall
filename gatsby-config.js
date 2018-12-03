module.exports = {
  siteMetadata: {
    title: 'axel_ekwall',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'markdown-pages',
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    // },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    // PostCSS Setup
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env')({ stage: 0 })],
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
        icon: 'src/images/a_e_logo.png', // This path is relative to the root of the site.
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
};
