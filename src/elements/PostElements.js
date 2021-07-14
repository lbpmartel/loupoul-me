import styled from "styled-components"

export const PostWrapper = styled.div`
   grid-column: 2 / span 10;
   min-height: 100px;
   height: auto;
   margin-top: 2rem;
   padding: 40px 80px;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`
