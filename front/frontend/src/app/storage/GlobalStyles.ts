'use client'

import { createGlobalStyle, css } from 'styled-components'

import reset from 'styled-reset'

const FlexCenter = css`
  // justify-content: center;
  display: flex;
  flex-direction: column;
`

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: 'Dovemayo_gothic';
  src: local('Dovemayo_gothic'), local('Dovemayo_gothic');
  font-style: normal;
  src: url(./src/fonts/Dovemayo_gothic.ttf) format('truetype');
}

*{
    box-sizing:border-box
}
body{
  background-image: url('/icons/TempBG_3.svg');
    ${FlexCenter};
}

`

export default GlobalStyle
