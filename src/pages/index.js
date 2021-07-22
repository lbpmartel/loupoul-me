import React from "react"
import {
   IntroBigCard,
   BlogPostsBigCard,
   CardsSection,
   Container,
   TopBackground,
   Intro,
   Seo
} from "../components"

import { GlobalWrapper } from "../elements"

const IndexPage = () => {
   return (
      <Container>
         <Seo />
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
