import React from "react"
import { BlogPreviewCardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const BlogPreviewCard = ({ title, excerpt, slug }) => {
   return (
      <BlogPreviewCardWrapper>
         <H2 textAlign="center" margin="0 0 1rem 0">
            { title }
         </H2>
         <P size="small" textAlign="center" margin="0 0 1.5rem 0" color="dark2">
            { excerpt }
         </P>
         <Button href={ slug }>Lire l'article</Button>
      </BlogPreviewCardWrapper>
   )

}