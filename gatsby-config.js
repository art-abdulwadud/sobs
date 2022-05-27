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
          apiKey: 'AIzaSyDLfK0W1T3MBRDYBVcr1gZV8iXOO2Fo7mE',
          authDomain: 'sobs-bluexpress.firebaseapp.com',
          projectId: 'sobs-bluexpress',
          storageBucket: 'sobs-bluexpress.appspot.com',
          messagingSenderId: '460312990546',
          appId: '1:460312990546:web:98431c5a5785d49eda208b',
          measurementId: 'G-99727260PQ'
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
