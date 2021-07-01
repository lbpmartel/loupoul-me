import React from "react"

import { BigCardWrapper } from "../elements"

export const BigCard = ({ children }) => {
   return (
      <BigCardWrapper>
         { children }
      </BigCardWrapper>
   );
}