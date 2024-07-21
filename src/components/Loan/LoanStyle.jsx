import styled from "styled-components";

export const ContainerLoan = styled.section`

  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 2.5rem;
  background-color: #060606;
  height: auto;
  overflow: hidden;

  padding: 0 15vw 10rem;
  @media (max-width:1300px) {
    
    align-items: center;
  }

  div {
    max-width: 1440px;
    width: 100%;
    /*
    margin: 0 auto;
    gap: 1rem;
    height: 350px;
     */
  }
`