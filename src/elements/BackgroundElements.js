import styled from "styled-components"

export const TopBackgroundWrapper = styled.div`
   grid-column: 1 / span 14;
   grid-row: 1 / 4;
   position: relative;
   background: #ABD8D3;
   z-index: -1;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column: 1 / span 8;
   }
`

export const BodyBackgroundWrapper = styled.div`

`