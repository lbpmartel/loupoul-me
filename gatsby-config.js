/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   /* Your site config here */
   plugins: [
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `pages`,
            path: `${ __dirname }/src/pages`
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `posts`,
            path: `${ __dirname }/src/posts`
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${ __dirname }/src/images`
         },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-mdx`,
      `gatsby-plugin-image`,
      {
         resolve: `gatsby-plugin-mdx`,
         options: {
            extensions: [`.md`, `.mdx`],
            gatsbyRemarkPlugins: [
               {
                  resolve: `gatsby-remark-images`,
                  options: {
                     maxWidth: 1200,
                  },
               },
            ]
         },
      },
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
            fonts: [
               `heebo\:200,400,500,700`,
               `Montserrat\:200,200i,500,500i`
            ],
            display: "swap",
         },
      },
   ],
}
