const postType = {}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'techInAsia__',

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10`,
        params: {
          requestParameters: [],
        },
        method: 'get',
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
        name: `posts`,
        auth: false,
        schemaType: postType,
        // payloadKey: `body`,
        localSave: false,
        verboseOutput: true, // For debugging purposes
        skipCreateNode: false,
        entitiesArray: [
          {
            url: `https://www.techinasia.com/wp-json/techinasia/2.0/posts`,
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: `tech-in-asia`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
