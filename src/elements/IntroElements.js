import styled from "styled-components"

export const IntroContainerWrapper = styled.div`
   grid-column: 2 / span 12;
   grid-row: 2 / 3;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const IntroImageWrapper = styled.div`
   //grid-column: 2 / span 4;
   padding-right: 20px;
`
export const IntroTextWrapper = styled.div`
   //grid-column: 5 / span 8;
   display: flex;
   flex-direction: column;
`

export const IntroPrimaryTextWrapper = styled.h1`
   font-family: heebo;
   font-style: normal;
   font-weight: bold;
   font-size: 44px;
`

export const IntroSecondaryTextWrapper = styled.h2`
   font-family: heebo;
   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 29px;
`
