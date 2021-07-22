import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ description, keywords, title, url, author, image }) => {

   return (
      <StaticQuery
         query={ detailsQuery }
         render={ data => {
            const metaDescription = description ? description : data.site.siteMetadata.description
            const metaTitle = title ? title : data.site.siteMetadata.title
            const metaUrl = url ? url : data.site.siteMetadata.url
            const metaImage = image ? image : data.site.siteMetadata.image
            const metaKeywords = keywords ? keywords : ["loupoul"]

            return (
               <Helmet
                  title={ metaTitle }
                  meta={ [
                     {
                        name: `description`,
                        content: metaDescription,
                     },
                     {
                        property: `og:title`,
                        content: metaTitle,
                     },
                     {
                        property: `og:description`,
                        content: metaDescription
                     },
                     {
                        property: `og:type`,
                        content: `website`
                     },
                     {
                        property: `og:image`,
                        content: metaImage,
                     },
                     {
                        property: `og:url`,
                        content: metaUrl
                     }
                  ].concat(
                     metaKeywords && metaKeywords.length > 0 ? {
                        name: `keywords`,
                        content: metaKeywords.join(`, `)
                     } : []
                  ) }
               />
            )
         } }
      />
   )
}

const detailsQuery = graphql`
   query DefaultSEOQuery {
      site {
         siteMetadata {
            title
            description
            image
         }
      }
   }
`