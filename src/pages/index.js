import React from "react"
import {
   BigCard,
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
            <BigCard>
            </BigCard>
            <BlogPostsBigCard />
         </CardsSection>
      </Container>
   )
}


export default IndexPage;
