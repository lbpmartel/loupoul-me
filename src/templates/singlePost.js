import React from "react"

import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1 } from "../elements"

import { SimpleContainer, Post, PostImage } from "../components"

const singlePost = ({ data }) => {
   const bannerImageURL = "/posts/" + data.mdx.frontmatter.banner.relativePath

   return (
      <SimpleContainer>
         <Post>
            <H1 margin="0 0 2rem 0">{ data.mdx.frontmatter.title }</H1>
            <img
               src={ bannerImageURL }
               alt="new"
            />
            <MDXRenderer>{ data.mdx.body }</MDXRenderer>
         </Post>
      </SimpleContainer>
   )
}

export default singlePost

export const pageQuery = graphql`
   query SinglePostQuery($id: String!) {
      mdx(id: {eq: $id}) {
         body
         frontmatter {
            slug
            title
            description
            translation_date
            banner {
               relativePath
            }
            bannerCredit
            author
         } 
      }
   }
`