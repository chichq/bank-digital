import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
html {
  font-size: 100%;
  
}
body {
  background-color: #060606;
}
@media (max-width:1250px) {
  html {
  font-size: 80%;
  
}
}
`