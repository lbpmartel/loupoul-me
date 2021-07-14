import React from "react"

import { graphql } from "gatsby"

import { Container, CardsSection, Pagination } from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
   const { currentPage, numPages } = pageContext;
   const isFirst = currentPage === 1;
   const isLast = currentPage === numPages;
   const prevPage = currentPage - 1 === 1 ? "/" : `/${ currentPage - 1 }`;
   const nextPage = `/${ currentPage + 1 }`

   const posts = data.allMdx.edges
   return (
      <Container>
         <CardsSection>
            <H1 textAlign="center" margin="0 0 1rem 0">
               Blabla
            </H1>
            <P color="dark2" textAlign="center">
               BLABALBALBALABLBALB afASLFASFA
               afASLFASFAasfa
               asf
               asf
               afASLFASFAasfaasfasfassf
               fwwfqfwfqwfq
               qwfqwf
            </P>

         </CardsSection>
         <Pagination
            isFirst={ isFirst }
            isLast={ isLast }
            prevPage={ prevPage }
            nextPae={ nextPage }
         />
      </Container>
   )
}

export default allPosts;

/* export const pageQuery = graphql`
   query AllPostsQueryTwo($skip: Int!, $limit: Int!) {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
         edges {
           node {
             excerpt
             frontmatter {
               slug
               title
               date
             }
           }
         }
      }
   }
`


 */
