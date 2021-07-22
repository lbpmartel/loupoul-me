/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   siteMetadata: {
      title: "loupoul's landing page",
      description: "Simple landing page + some translated blog posts, all created with Gatsby and MDX",
      url: "https://loupoul.me",
      image: "/src/images/louis_cropped_2.jpg"
   },
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
