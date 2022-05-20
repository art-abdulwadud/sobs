/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
module.exports = {
  siteMetadata: {
    title: 'SOBS',
    description: 'Somalia Bureau of Standards',
    author: '@gatsbyjs'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/preloader.png'
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCQc0KombCHi0hZBKSF0vT_ZhWV1BiOoKo',
          authDomain: 'tribalkenya-ff470.firebaseapp.com',
          databaseURL: 'https://tribalkenya-ff470.firebaseio.com',
          projectId: 'tribalkenya-ff470',
          storageBucket: 'tribalkenya-ff470.appspot.com',
          messagingSenderId: '812549061912',
          appId: '1:812549061912:web:a2fd9c25d99b4ebef7f26d',
          measurementId: 'G-L2VF3SHGJ0'
        }
      }
    },
    'gatsby-plugin-gatsby-cloud'

    /*
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     * `gatsby-plugin-offline`,
     */
  ]
};
