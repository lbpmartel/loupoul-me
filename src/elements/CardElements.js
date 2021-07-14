import styled from "styled-components"

export const CardsContainer = styled.main`
   grid-column: 2 / span 10;
   grid-row: 3 / span 2;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`

export const BigCardWrapper = styled.div`
   grid-column: 2 / span 10;
   min-height: 100px;
   height: auto;
   margin-top: 2rem;
   padding: 40px 80px;

   background: #FFFFFF;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 10px rgba(187, 225, 250, 0.25);
   border-radius: 20px;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
   }
`

export const BlogPreviewCardWrapper = styled.div`
   padding: 20px 0 20px 0;
   display: flex;
   flex-direction: column;
   align-items: left;
`