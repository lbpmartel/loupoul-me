import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link { ...props } />)`
   font-family: heebo;
   padding: 0.5rem 0.75rem;
   background-color: ${ props => props.theme.colors.main1 };
   border-radius: 0.5rem;
   color: ${ props => props.theme.colors.dark1 };
   font-weight: 400;
   font-size: 0.875rem;
   width: fit-content;
   transition: filter 0.3s ease;
   text-decoration: none;
   &:hover,
   &:focus {
      filter: brightness(110%)
   }
`