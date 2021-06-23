import React from "react"
import {
   IntroContainerWrapper,
   IntroPrimaryTextWrapper,
   IntroSecondaryTextWrapper,
   IntroTextWrapper
} from "../elements"

import { IntroPhoto } from "../components"

export const Intro = () => {
   return (
      <IntroContainerWrapper>
         <IntroPhoto />
         <IntroTextWrapper>
            <IntroPrimaryTextWrapper>
               Salut, moi c'est
               <br />
               Louis-Bernard&nbsp;Poulin&nbsp;Martel,
               <br />
               développeur Front End
            </IntroPrimaryTextWrapper>
            <IntroSecondaryTextWrapper>
               (mais appelle-moi Louis...)
            </IntroSecondaryTextWrapper>
         </IntroTextWrapper>
      </IntroContainerWrapper>
   )
}