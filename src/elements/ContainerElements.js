import styled, { createGlobalStyle } from "styled-components";

export const GlobalWrapper = createGlobalStyle`
   body {
      background-color: ${ props => props.theme.colors.bodyBackground };
   }
`

export const ContainerWrapper = styled.div`
   height: 100%;
   display: grid;
   grid-template-columns: 1fr repeat(10, minmax(auto, 4.2rem)) 1fr;
   grid-template-rows: 5.8rem 20rem 5rem auto;
   gap: 1rem 2rem;

   @media ${ props => props.theme.breakpoints.tablet }  {
      grid-template-columns: 2rem repeat(4, 1fr) 2rem;
      grid-gap: 1rem;
   }
   
   @media ${ props => props.theme.breakpoints.mobile }  {
      grid-template-columns: 1rem repeat(4, 1fr) 1rem;
      grid-gap: 1rem;
   }
`

export const SimpleContainerWrapper = styled.div`
   height: 100%;
   display: grid;
   grid-template-columns: 1fr repeat(10, minmax(auto, 4.2rem)) 1fr;
   grid-template-rows: 5.8rem auto;
   gap: 1rem 2rem;

   @media ${ props => props.theme.breakpoints.tablet }  {
      grid-template-columns: 2rem repeat(4, 1fr) 2rem;
      grid-gap: 1rem;
   }

   @media ${ props => props.theme.breakpoints.mobile }  {
      grid-template-columns: 1rem repeat(4, 1fr) 1rem;
      grid-gap: 1rem;
   }
`