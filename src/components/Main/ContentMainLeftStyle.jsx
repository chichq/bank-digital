import styled from "styled-components";


export const ContentMainLeft = styled.div`

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  width: 50%;

  h1 {
    font-size: 4rem;
    color: #fff;
    font-weight: 700;
    text-align: start;
    max-width: 900px;
  }
  @media (max-width:1250px) {
    h1 {
      font-size: 3.3rem;
    }
  }
  @media (max-width:928px) {
    width: 90%;
    align-items: center;
  
  h1 {
    text-align: center;
    font-size: 3rem;
  }
}

`