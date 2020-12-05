require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    author: '@markjackson02',
    siteLanguage: 'en',
    siteHeadline: "Mark Jackson's personal blog",
    siteUrl: "https://blog.remjx.com",
    siteTitle: "remjx",
    siteTitleAlt: `remjx`,
    siteDescription: "Mark Jackson's personal website"
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        blogPath: '/posts',
        feedTitle: "remjx",
        formatString: 'MMM DD YYYY',
        navigation: [
          {
            title: `Posts`,
            slug: `/posts`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `Kit`,
            slug: `/kit`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/markjackson02/'
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/remjxd`,
          },
          {
            name: `Github`,
            url: `https://github.com/remjx`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167342385-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `remjx`,
        short_name: `remjx`,
        description: `Mark Jackson's personal website`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0345fc`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
