import React from "react"
import {
   BigCard,
   BlogPreviewCard,
} from "../components"

import { StaticQuery, graphql } from "gatsby"

export const BlogPostsBigCard = () => {

   return (
      <StaticQuery
         query={ graphql`
            query AllPostsQuery {
               allMdx {
                  edges {
                     node {
                        frontmatter {
                           slug  
                           title
                           date
                           description
                        }
                     }
                  }
               }
            }
         ` }
         render={ data => (
            <BigCard>
               { data.allMdx.edges.map(post =>
                  <BlogPreviewCard
                     title={ post.node.frontmatter.title }
                     excerpt={ post.node.frontmatter.excerpt }
                     slug={ post.node.frontmatter.slug }
                  />
               ) }
            </BigCard>
         ) }
      />
   )
}

