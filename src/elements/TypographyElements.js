import styled from "styled-components"

export const A = styled.a`
   color: ${ props => props.theme.colors.dark1 };
   font-family: heebo;
   text-decoration: none;
   border-bottom: 3px solid ${ props => props.theme.colors.main1 };
   display: inline-block;
   height: 1.6rem;
   &:hover {
      border-bottom: 3px solid ${ props => props.theme.colors.main2 } !important;
      display: inline-block;
      height: 1.6rem;
   }
`

export const P = styled.p`
   font-family: heebo;
   margin: ${ props => props.margin ? props.margin : 0 };
   font-size: ${ props => {
      switch (props.size) {
         case "large":
            return "1.25rem";
         case "medium":
            return "1.125rem";
         case "small":
            return "1rem";
         case "xSmall":
            return "0.875rem";
         default:
            return "1.125rem";
      }
   } };

   line-height: ${ props => {
      switch (props.size) {
         case "large":
            return "1.7rem";
         case "medium":
            return "1.4375rem";
         case "small":
            return "1.375rem";
         case "xSmall":
            return "1.125rem";
         default:
            return "1.4375rem";
      }
   } };

   text-decoration: ${ props => props.textDecoration ? props.textDecoration : "none" };
   font-weight: ${ props => {
      switch (props.weight) {
         case "normal":
            return 400;
         case "bold":
            return 700;
         case "thin":
            return 200;
         default:
            return 400;
      }
   } };
   color: ${ props => {
      switch (props.color) {
         case "dark1":
            return props.theme.colors.dark1;
         case "dark2":
            return props.theme.colors.dark2;
         case "dark3":
            return props.theme.colors.dark3;
         case "light1":
            return props.theme.colors.light1;
         case "light2":
            return props.theme.colors.light2;
         default:
            return props.theme.colors.dark1;
      }
   } };
   text-align: ${ props => props.textAlign ? props.textAlign : "left" };   
`

export const H1 = styled.h1`
   font-family: heebo;
   font-size: 2.25rem;
   line-height: 2.5rem;
   color: ${ props => {
      switch (props.color) {
         case "dark1":
            return props.theme.colors.dark1;
         case "dark2":
            return props.theme.colors.dark2;
         case "dark3":
            return props.theme.colors.dark3;
         case "light1":
            return props.theme.colors.light1;
         case "light2":
            return props.theme.colors.light2;
         default:
            return props.theme.colors.dark1;
      }
   } };
   font-weight: ${ props => {
      switch (props.weight) {
         case "normal":
            return 400;
         case "bold":
            return 700;
         default:
            return 400;
      }
   } };
   text-align: ${ props => props.textAlign ? props.textAlign : "left" };
   margin: ${ props => props.margin ? props.margin : 0 };

`

export const H2 = styled.h2`
   font-family: heebo;
   font-size: 1.5rem;
   line-height: 1.875rem;
   color: ${ props => {
      switch (props.color) {
         case "dark1":
            return props.theme.colors.dark1;
         case "dark2":
            return props.theme.colors.dark2;
         case "dark3":
            return props.theme.colors.dark3;
         case "light1":
            return props.theme.colors.light1;
         case "light2":
            return props.theme.colors.light2;
         default:
            return props.theme.colors.dark1;
      }
   } };
   font-weight: ${ props => {
      switch (props.weight) {
         case "normal":
            return 400;
         case "bold":
            return 700;
         default:
            return 400;
      }
   } };
   text-align: ${ props => props.textAlign ? props.textAlign : "left" };
   margin: ${ props => props.margin ? props.margin : 0 };

`

export const H3 = styled.h3`
   font-family: heebo;
   font-size: 1rem;
   line-height: 1.5rem;
   color: ${ props => {
      switch (props.color) {
         case "dark1":
            return props.theme.colors.dark1;
         case "dark2":
            return props.theme.colors.dark2;
         case "dark3":
            return props.theme.colors.dark3;
         case "light1":
            return props.theme.colors.light1;
         case "light2":
            return props.theme.colors.light2;
         default:
            return props.theme.colors.dark1;
      }
   } };
   font-weight: ${ props => {
      switch (props.weight) {
         case "normal":
            return 400;
         case "bold":
            return 700;
         default:
            return 400;
      }
   } };
   text-align: ${ props => props.textAlign ? props.textAlign : "left" };
   margin: ${ props => props.margin ? props.margin : 0 };
`

