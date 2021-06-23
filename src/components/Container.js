import React from "react"

import { ContainerWrapper } from "../elements"
import { Footer, Nav, TopBackground } from "../components"

export const Container = ({ children }) => {
   return (
      <ContainerWrapper>
         <TopBackground />
         <Nav />
         { children }
         <Footer />
      </ContainerWrapper>
   );
}