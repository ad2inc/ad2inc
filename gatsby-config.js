var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Ad2Inc | Effective Marketing | Online and Off',
    siteUrl: `https://ad2inc.netlify.com`,
    description:
      'Ad2, Inc. offers creative development and campaign management services, as well as brand consulting and other marketing communications services, such as marketing research, strategic planning, direct and interactive marketing.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ad2inc.net`,
        short_name: `Ad2Inc`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/img/ad2inc-logo-round.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        TrackingId: '',
      }
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['headroom', 'headroom--unfixed'], // Don't remove this selector
         //ignore: ['index.css'], // Ignore files/folders

         purgeOnly : ['/index.css', '/animate.compat.css', '/custom.css', '/noscript.css'], // Purge only these 
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
