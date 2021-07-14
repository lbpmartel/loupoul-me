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
                     key={ post.node.frontmatter.slug }
                     title={ post.node.frontmatter.title }
                     description={ post.node.frontmatter.description }
                     slug={ post.node.frontmatter.slug }
                  />
               ) }
            </BigCard>
         ) }
      />
   )
}

