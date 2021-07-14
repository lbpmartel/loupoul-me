import React from "react"
import { BlogPreviewCardWrapper, P, H3 } from "../elements"
import { Button } from "../components"

export const BlogPreviewCard = ({ title, description, slug }) => {
   return (
      <BlogPreviewCardWrapper>
         <H3 textAlign="left" weight="bold" margin="0 0 0.5rem 0">
            { title }
         </H3>
         <P size="xSmall" textAlign="left" margin="0 0 0.75rem 0" color="dark2">
            { description }
         </P>
         <Button href={ slug }>Lire l'article</Button>
      </BlogPreviewCardWrapper>
   )

}