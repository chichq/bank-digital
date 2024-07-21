import styled from "styled-components";

export const ContainerLeft = styled.div`

display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
max-width:900px;
width: 100%;
@media (max-width: 1008px) {
    align-items: center;
  }
@media (max-width: 980px) {
  margin-bottom: 2rem;
  align-items: center;
}

`