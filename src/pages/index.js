import React from "react"
import {
   BigCard,
   BlogPreviewCard,
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
            <BigCard>
               <BlogPreviewCard
                  title="Titre test"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                  slug="/test" />
            </BigCard>
         </CardsSection>
      </Container>
   )
}

export default IndexPage;
