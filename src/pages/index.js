import React from "react"
import {
   IntroBigCard,
   BlogPostsBigCard,
   CardsSection,
   Container,
   TopBackground,
   Intro
} from "../components"

import { GlobalWrapper } from "../elements"

const IndexPage = () => {
   return (
      <Container>
         <GlobalWrapper />
         <TopBackground />
         <Intro />
         <CardsSection>
            <IntroBigCard />
            <BlogPostsBigCard />
         </CardsSection>
      </Container>
   )
}


export default IndexPage;
