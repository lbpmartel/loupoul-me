import React from "react"

import { CardsContainer } from "../elements"

export const CardsSection = ({ children }) => {
   return (
      <CardsContainer>
         { children }
      </CardsContainer>
   );
}