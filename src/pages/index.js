import React from "react"
import { BigCard, CardsSection, Container, TopBackground, Intro } from "../components"

const IndexPage = () => {
   return (
      <Container>
         <TopBackground />
         <Intro />
         <CardsSection>
            <BigCard />
         </CardsSection>
      </Container>
   )
}

export default IndexPage;
