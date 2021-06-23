import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { NavWrapper } from "../elements"

export const Nav = () => {
   const data = useStaticQuery(graphql`
      query {
         logo: file(relativePath: {eq: "loupoul-me.svg"}) {
            publicURL
         }
      }
   `)

   return (
      <NavWrapper>
         <Link to="/">
            <img src={ data.logo.publicURL } alt="loupoul.me" />
         </Link>
      </NavWrapper>
   )
}