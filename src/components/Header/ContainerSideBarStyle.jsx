import styled from "styled-components";
import { css } from "styled-components";

export const ContentSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  
nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5rem 0 2rem;
}
nav a {
  font-size: 1.6rem;
}
button {
  display: flex;
  margin: 0;
}
footer {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 2rem;
}
footer div {
  display: flex;
  align-items: center;
}
footer div p {
  text-align: center;
}

${({ sidebar }) => sidebar && css`

background-color: #0E0A24;
position: fixed;
height: 100%;
top: 0px;
right: 0px;
width: 85vw;
animation: showSidebar .5s; 
border-left: 1px solid #fff;

@keyframes showSidebar {
  from {
    opacity: 0;
    width: 0;
  }
  to{
    opacity: 1;
    width: 85vw;
  }
}
` }
`






