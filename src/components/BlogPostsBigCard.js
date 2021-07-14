import React from "react"
import {
   BigCard,
   BlogPreviewCard,
} from "../components"

import { H2 } from "../elements"

import { StaticQuery, graphql } from "gatsby"

export const BlogPostsBigCard = () => {

   return (
      <StaticQuery
         query={ graphql`
            query AllPostsQuery {
               allMdx(sort: {fields: frontmatter___translation_date, order: DESC}) {
                  edges {
                     node {
                        frontmatter {
                           slug
                           title
                           description
                           translation_date
                        }
                     }
                  }
               }
            }
         ` }
         render={ data => (
            <BigCard>
               <H2>Blog</H2>
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

