/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
        icon: 'src/images/gatsby-icon.png'
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
          apiKey: 'AIzaSyACFpcEX0cgGd-VzYtmRUbG3pVu4Cp8En8',
          authDomain: 'tabasamufibre.firebaseapp.com',
          databaseURL: 'https://tabasamufibre.firebaseio.com',
          projectId: 'tabasamufibre',
          storageBucket: 'tabasamufibre.appspot.com',
          messagingSenderId: '391023338076',
          appId: '1:391023338076:web:049b6013d6160208e87c99'
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
