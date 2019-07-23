module.exports = {
  siteMetadata: {
    title: `Tehran React`,
    description: `The biggest Iranian React and React Native community`,
    author: `Tehranreact`,
  },
  plugins: [
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
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/config/routes.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
