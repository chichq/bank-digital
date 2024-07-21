import styled from "styled-components";

export const ImgSecundaryTwo = styled.img`


width: 18%;
position: relative;
bottom: 40vh;
right: 3vw;
z-index: 1;
animation: floatRight ease-in-out 3s infinite;

@keyframes floatRight {
  0% ,
  100% {
    transform: translateY(0px);
  }
  50%{
    transform: translateY(20px);
  }
}
@media (max-width:485px) {
  bottom: 45vh;
  right: 15vw;
  width: 23%;
  }
`