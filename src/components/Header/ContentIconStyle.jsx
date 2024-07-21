import styled, { css } from "styled-components";


export const ContentIcon = styled.div`

cursor: pointer;
z-index: 1000;
display: none;
div {
  width: 36px;
  height: 2px;
  background: #fff6ea;
  margin: 8px;
}
@media (max-width: 1250px) {
  display: block;
}
${({close}) => close && css`
div {
  transition: .3s;
    position: relative;
    top: 10px;
    left: 10px;
}
`}
${({close}) => close && css`
 .line-one{
    transform: rotate(-45deg) translate(-8px, -8px);
  }
.line-two{
  opacity: 0;}
 .line-three {
  transform: rotate(42deg) translate(-21px, -7px);
}
`}

`