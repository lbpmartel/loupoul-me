import styled from "styled-components";

export const ContainerWrapper = styled.div`
   height: 100%;
   display: grid;
   grid-template-columns: 1fr repeat(10, minmax(auto, 4.2rem)) 1fr;
   grid-template-rows: 7.8rem 20rem 5rem auto;
   gap: 1rem 2rem;

   @media ${ props => props.theme.breakpoints.tablet }  {
      grid-template-columns: 2rem repeat(4, 1fr) 2rem;
      grid-gap:0 1rem
   }

   @media ${ props => props.theme.breakpoints.mobile }  {
      grid-template-columns: 1rem repeat(4, 1fr) 1rem;
   }
`