import React from "react"
import { BlogPreviewCardWrapper, P, H2 } from "../elements"
import { Button } from "../components"

export const BlogPreviewCard = ({ title, description, slug }) => {
   return (
      <BlogPreviewCardWrapper>
         <H2 textAlign="left" margin="0 0 0.75rem 0">
            { title }
         </H2>
         <P size="small" textAlign="left" margin="0 0 0.75rem 0" color="dark2">
            { description }
         </P>
         <Button href={ slug }>Lire l'article</Button>
      </BlogPreviewCardWrapper>
   )

}