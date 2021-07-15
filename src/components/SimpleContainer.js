import React from "react"

import { SimpleContainerWrapper } from "../elements"
import { Footer, Nav } from "../components"

export const SimpleContainer = ({ children }) => {
   return (
      <SimpleContainerWrapper>
         <Nav />
         { children }
         <Footer />
      </SimpleContainerWrapper>
   );
}