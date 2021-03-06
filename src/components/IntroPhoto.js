import React from "react"
import { IntroImageWrapper } from "../elements"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


export const IntroPhoto = () => {

   const data = useStaticQuery(graphql`
      {
         file(relativePath: { eq: "louis_cropped_2.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: CONSTRAINED, width: 320, quality: 100)
            }
         }
      }
   `)

   return (
      <IntroImageWrapper>
         <GatsbyImage image={ data.file.childImageSharp.gatsbyImageData }
            alt="loupoul"
            style={ {
               borderRadius: "50%"
            } }
            imgStyle={ {
               borderRadius: "50%"
            } } />
      </IntroImageWrapper>
   )
}