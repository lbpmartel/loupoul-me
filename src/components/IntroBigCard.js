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
            Bienvenue sur ma petite landing page! Elle m'a permis d'expérimenter avec le framework <A href="https://www.gatsbyjs.com/"> Gatsby</A>. Comme elle a été fait par temps libres, elle se veut sans artifice ni fla-fla...
            <br />
            <br />
            Je travaille avec <A href="https://reactjs.org/">React</A> depuis maintenant { nbYearsExpFE } ans, mais je suis dans le développement logiciel depuis 2012.
            Durant les dernières années, je me suis intéressé plus particulièrement sur le développement de tests automatisés
            (<A href="https://enzymejs.github.io/enzyme/">Enzyme</A>, <A href="https://testing-library.com/docs/react-testing-library/intro/">react-testing-library</A>, <A href="https://nightwatchjs.org/">Nightwatch</A>)
            pour assurer la livraison d'applications web de qualité.
            <br />
            <br />
            Si vous voulez plus d'information, vous pouvez me contacter sur <A href="https://www.linkedin.com/in/loupoul/">LinkedIn</A> 😊.
            <br />
            <br />
            À part ça, je suis nouvellement papa 👶.
         </P>
      </BigCard>
   )
}

