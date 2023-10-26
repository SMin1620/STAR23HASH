"use client"

import { createGlobalStyle, css } from "styled-components"

import reset from "styled-reset"

const FlexCenter = css`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box
}
body{
    background-color: #ffd4f7;

    margin-top: 5rem;
    ${FlexCenter};
}

`

export default GlobalStyle
