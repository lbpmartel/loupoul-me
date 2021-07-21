import React from "react"

import { Post, SimpleContainer } from "../components"

import { H1 } from "../elements"

const notFound = () => {
   return (
      <SimpleContainer>
         <Post>
            <H1 textAlign="center" margin=" 0 0 1rem 0">
               Cette page ne semble pas exister...
            </H1>
         </Post>
      </SimpleContainer>
   )
}

export default notFound