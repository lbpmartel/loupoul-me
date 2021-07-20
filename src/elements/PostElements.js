import styled from "styled-components"

export const PostWrapper = styled.div`
   grid-column: 2 / span 10;
   min-height: 100px;
   height: auto;
   padding: 40px 80px;

   h1:not(:first-child),
   h2,
   h3,
   h4,
   h5,
   h6 {
      margin-top: 2rem;
   }

   h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      font-weight: 400;
   }

   h2 {
      font-size: 1.75rem;
      line-height: 1.875rem;
      font-weight: 400;
   }
   h3 {
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
   }
   h4 {
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 400;
   }
   h5 {
      font-size: 1.125rem;
      line-height: 1.375rem;
      font-weight: 700;
   }
   h6 {
      font-size: 1.125rem;
      line-height: 1.875rem;
      font-weight: 400;
   }

   p {
      font-size: 1.125rem;
      line-height: 1.875rem;
      font-weight: 400;
      color: ${ props => props.theme.colors.dark2 };
      margin-top: 2rem;
   } 

   a {
      font-size: 1.125rem;
      text-decoration: none;
      color: ${ props => props.theme.colors.main1 };
   }

   a:hover {
      text-decoration: underline;
   }

   strong {
      font-weight: 500;
   }

   em {
      font-style: italic;
   }

   del {
      text-decoration: line-through;
   }

   blockquote {
      margin-top: 2rem;
      font-style: italic;
      border-left: 5px solid ${ props => props.theme.colors.main1 };

      p {
         padding-left: 1rem;
         font-size: 1.125rem;
         line-height: 1.5rem;
         text-align: left;
         margin: 1rem auto;
      }
   }

   ul,
   ol {
      color: ${ props => props.theme.colors.dark2 };
      margin: 1rem 0 1rem 2rem;
   }

   li {
      margin: 0.25rem 0;
   }

   code {
      font-family: ${ props => props.theme.fonts.code };
      font-size: 1rem;
      line-height: 1.875rem;
      color: ${ props => props.theme.colors.dark2 };
      background-color: ${ props => props.theme.colors.light3 };
      padding: 0 0.3rem;
      border-radius: 3px;
   }

   hr {
      border: 0;
      height: 1px;
      background: ${ props => props.theme.colors.dark1 };
      opacity: 0.1;
      margin-top: 2rem;
   }

   table {
      width: 100%;
      border-spacing: 0.25rem;
      border-collapse: collapse;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
   }

   th { 
      font-weight: 700;
   }

   table, 
   th,
   td {
      text-align: left;
      padding: 0.5rem;
   }

   @media ${ props => props.theme.breakpoints.tablet } {
      grid-column:2 / span 4;
      padding: 10px;
   }
`
