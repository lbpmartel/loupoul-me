import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialIcons, FooterSocialWrapper, P } from "../elements"

export const Footer = () => {

   const data = useStaticQuery(graphql`
      query { 
         linkedin: file(relativePath: {eq: "linkedin.svg"}) {
            publicURL
         }
         github: file(relativePath: {eq: "github.svg"}) {
            publicURL
         }
      }
   `)
   const generateCopyrightTextWithYear = () => {
      let newDate = new Date()
      let year = newDate.getFullYear();
      return `© ${ year } Louis-Bernard Poulin Martel. All rights reserved.`
   }

   return (
      <FooterWrapper>
         <FooterSocialWrapper>
            <FooterSocialIcons>
               <a href="https://www.linkedin.com/in/loupoul" target="_blank" rel="noopened noreferrer">
                  <img src={ data.linkedin.publicURL } alt="LinkedIn logo" />
               </a>
               <a href="https://github.com/lbpmartel/" target="_blank" rel="noopened noreferrer">
                  <img src={ data.github.publicURL } alt="GitHub logo" />
               </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3">{ generateCopyrightTextWithYear() }</P>
         </FooterSocialWrapper>
      </FooterWrapper>
   )
}