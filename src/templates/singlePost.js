import React from "react"

import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1 } from "../elements"

import { SimpleContainer, Post } from "../components"

const singlePost = ({ data }) => {
   const bannerImageURL = data.mdx.frontmatter.banner;

   return (
      <SimpleContainer>
         <Post>
            <H1 margin="0 0 2rem 0">{ data.mdx.frontmatter.title }</H1>
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
            banner
            bannerCredit
            author
         } 
      }
   }
`