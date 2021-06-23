import React from "react"

import { ContainerWrapper } from "../elements"
import { Footer, Intro, Nav, TopBackground } from "../components"

export const Container = ({ children }) => {
   return (
      <ContainerWrapper>
         <TopBackground />
         <Intro />
         <Nav />
         { children }
         <Footer />
      </ContainerWrapper>
   );
}