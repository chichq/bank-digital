import styled, { css } from "styled-components";


export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 1.5rem 1rem;
  background-color: transparent;
  border-radius: 10px;
  transition: .5s;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
  h3 {
  color: #6b6b6b;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: start;
  cursor: pointer;
  transition: .5s;

}
p {
  display: none;
  padding: 1rem 0;
  transition: display  .5s;
}
button { 
  border: 1px solid #6b6b6b;
  border-radius: 50%;
  padding: .7rem;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  transition: .5s;
} 
img {
  transform: rotate(0deg);
  transition: all.5s;
}

${({ isVisible }) => isVisible && css`
  
  
background-color: #131313;
h3 {
  color: #f1f1f1;
}
  p {
  display: block;
  transition: .5s;
}
button { 
  border: 1px solid #149af6;
  background-color: #149af6;
}
img {
  transform: rotate(180deg);
}
  `}
`