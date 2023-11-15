'use client'

import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
*{
}
body{
  font-family:
  'Dovemayo_gothic',
  -apple-system,
  sans-serif;

  background-color: #C5E7AC;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}

`

export default GlobalStyle
