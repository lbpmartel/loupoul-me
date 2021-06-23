import React from "react"
import { IntroImageWrapper } from "../elements"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export const IntroPhoto = ({ fixed }) => {

   const data = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "louis.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FIXED)
            }
         }
      }
   `)

   return (
      <IntroImageWrapper>
         <GatsbyImage image={ data.file.childImageSharp.gatsbyImageData } alt="loupoul" style={ {
            width: "100%",
            height: "100%",
            borderRadius: "50%"
         } } />
      </IntroImageWrapper>
   )
}