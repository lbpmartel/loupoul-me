import styled from "styled-components"

export const CardsContainer = styled.main`
   grid-column: 2 / span 10;
   grid-row: 3 / auto;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`


export const BigCardWrapper = styled.div`
   grid-column: 2 / span 10;
   height: 500px;

   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(187, 225, 250, 0.25);
   border-radius: 20px;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`