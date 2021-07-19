import styled from "styled-components"

export const NavWrapper = styled.nav`
   grid-column: 2 / span 10;
   grid-row: 1 / 2;
   display: flex;
   align-items: center;
   background: ${ props => props.theme.colors.main1 };

   & img {
      height: 30px;
   }

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`