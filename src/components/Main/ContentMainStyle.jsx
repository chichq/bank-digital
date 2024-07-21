import styled from "styled-components";

export const ContentMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

margin: 0 5%;
@media (max-width:928px) {
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width:485px) {
    gap: 8rem;
  }
`