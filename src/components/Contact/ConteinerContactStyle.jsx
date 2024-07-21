import styled from "styled-components";

export const ContainerContant  = styled.div`


margin: -5rem 0 5rem 0;
display: flex;
flex-direction: column;
align-items: center;

`

export const Banner = styled.div`
background: linear-gradient(90deg,
    rgba(107,74,213, .7),
    rgba(247,81,69, .7)
  ), url(/banner-faq.jpg) center center;
height: 400px;
width: 70vw;
border-radius: 10px 10px 0 0;
@media (max-width: 1150px){
  width: 100vw;
}
`

export const Form = styled.div`
display: flex;
align-items: start;
padding: 5rem;
justify-content: center;
background-color: linear-gradient( #6a0dad, #ff0000);;
width: 70vw;
border-radius: 0 0 10px 10px ;
gap: 1rem;
@media (max-width: 1150px){
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100vw;
}
@media (max-width: 640px){
  padding:3rem 1rem;
}
`

export const ContentForm = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1.3rem;
@media (max-width: 1150px){
  align-items: center;
}
h4 {
  color: #060606;
  line-height: 2.5rem;
  @media (max-width: 1150px){
  text-align:center;
}
}
p {
  width: 80%;
  @media (max-width: 1150px){
  text-align:center;
}
}
div {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  @media (max-width: 1150px){
  gap: 1.5rem;
}
}
img {
  background-color: #149af6;
  padding: .7rem;
  border-radius: 50%;
}
`
export const InputForm = styled.form`

display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
input, 
textarea {
  min-width: 400px ;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #149af6;
  outline: none;
  color: #7B7D81;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 640px){
    min-width: 280px ;
}
}
input::placeholder, 
textarea::placeholder {
  color: #7B7D81;
  font-size: 1rem;
  font-weight: 00;
}
textarea {
  resize: none;
}
`