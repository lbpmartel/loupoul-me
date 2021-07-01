import styled from "styled-components"

export const TopBackgroundWrapper = styled.div`
   grid-column: 1 / span 12;
   grid-row: 1 / 4;
   position: relative;
   background: ${ props => props.theme.colors.main1 };
   z-index: -1;
   
   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:1 / span 6;
   }
`