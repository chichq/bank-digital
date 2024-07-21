import styled from "styled-components";

export const ImgSecundaryOne = styled.img`
width: 16%;
position: relative;
bottom: 10vh;
left: 3vw;
z-index: 1;
animation: floatLeft ease-in-out 3.5s infinite;

@keyframes floatLeft {
  0% ,
  100% {
    transform: translateY(0px);
  }
  50%{
    transform: translateY(30px);
  }
}
@media (max-width:485px) {
  bottom: 8vh;
  left: 15vw;
  width: 27%;
  }
`