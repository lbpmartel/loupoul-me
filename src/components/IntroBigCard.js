import React from "react"
import {
   BigCard,
} from "../components"

import { P } from "../elements"

export const IntroBigCard = () => {

   const nbYearsExp = (new Date().getFullYear() - new Date(2012, 4, 30).getFullYear())

   return (
      <BigCard>
         <P size="large">
            Salut  👋
            <br />
            <br />
            Je suis Louis un développeur Front-End passionné qui adore travailler en équipe. J'ai le soucis de la qualité à coeur dans les applications que je développe.
            <br />
            <br />
            Je suis sur le marché du travail depuis { nbYearsExp } ans. Avec ma technique en informatique de gestion

         </P>
      </BigCard>
   )
}

