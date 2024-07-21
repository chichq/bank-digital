import styled from "styled-components";

export const CommentCard = styled.div`

background-color: #111111;
border: 1px solid #6b6b6b;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: start;
height: 550px;
padding: 1rem 3rem;
@media (max-width: 500px) {
  height: 300px;
}
div {
  display: flex ;
flex-direction: column;
  gap: 1.5rem;
}
img {
  width: 100px;
  border-radius: 50%;
  @media (max-width: 500px) {
  width: 70px;
}
}
h4 {
  color: #fff;
  font-size: 1.7rem;
  @media (max-width: 500px) {
    font-size: 1.4rem;
}
}
`


