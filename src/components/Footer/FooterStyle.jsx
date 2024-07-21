import styled from "styled-components";

export const FooterContainer = styled.footer`
padding: 5rem ;
display: flex;
justify-content: center;
align-items: center;
gap: 10rem;
@media (max-width: 905px) {
  flex-wrap: wrap;
  gap: 5rem;
}

p{
  
  max-width: 500px;
}
`