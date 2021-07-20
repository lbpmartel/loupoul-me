import React from "react"
import {
   BigCard,
   BlogPreviewCard,
} from "../components"

import { H2, P } from "../elements"

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
               <P margin="1rem 0 1rem 0" size="small">Ces articles m'ont été utiles par le passé. Pour ajouter un semblant de contenu à cette page, j'ai décidé de les traduire en français. Je ne détiens donc aucun droit d'auteur sur ces articles.</P>
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

