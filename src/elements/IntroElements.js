import styled from "styled-components"

export const IntroContainerWrapper = styled.div`
   grid-column: 2 / span 10;
   grid-row: 2 / 3;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
      flex-direction: column;
   }
`

export const IntroImageWrapper = styled.div`
   padding-right: 1.125rem;
   
   @media ${ props => props.theme.breakpoints.tablet } {
      display: flex;
      justify-content: center;      
   }
`
export const IntroTextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const IntroPrimaryTextWrapper = styled.h1`
   font-family: heebo;
   font-style: normal;
   font-weight: 700;
   font-size: 2.75rem;

   @media ${ props => props.theme.breakpoints.tablet } {
      display: flex;
      justify-content: center;      
   }
`

export const IntroSecondaryTextWrapper = styled.h2`
   font-family: heebo;
   font-style: normal;
   font-weight: 400;
   font-size: 1.25rem;
   line-height: 1.5rem;

   @media ${ props => props.theme.breakpoints.tablet } {
      display: flex;
      justify-content: center;      
   }
`
