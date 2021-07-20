import React from "react"
import {
   BigCard,
} from "../components"

import { P, A } from "../elements"

export const IntroBigCard = () => {

   const nbYearsExpFE = (new Date().getFullYear() - 2018)

   return (
      <BigCard>
         <P size="large">
            👋
            <br />
            <br />
            Voici ma petite landing page qui m'a permis d'expérimenter avec le framework <A href="https://www.gatsbyjs.com/"> Gatsby</A> par temps libres. Elle se veut sans artifice ni fla-fla...
            <br />
            <br />
            Je travaille avec <A href="https://reactjs.org/">React</A> depuis maintenant { nbYearsExpFE } ans, mais je suis dans le développement logiciel depuis 2012.
            Durant les dernières années, je me suis penché plus particulièrement sur le développement de tests automatisés
            (<A href="https://enzymejs.github.io/enzyme/">Enzyme</A>, <A href="https://testing-library.com/docs/react-testing-library/intro/">react-testing-library</A>, <A href="https://nightwatchjs.org/">Nightwatch</A>).
            <br />
            <br />
            Sinon, je suis nouvellement papa 👶.
         </P>
      </BigCard>
   )
}

