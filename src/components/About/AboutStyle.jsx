import styled from "styled-components";

export const SectionAbout = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 5rem;
  background-color: #060606;
  height: auto;
  padding: 10rem 0;
  @media (max-width:1300px) {
    flex-direction: column;
    h4 {
      max-width: none;
    }
  }
  
`
export const ContentLeftAbout = styled.div`

display: flex;
align-items: start;
flex-direction: column;
gap: 2rem;
max-width: 700px;
padding: 0 5rem;

@media (max-width:1300px) {
    max-width: none;
    align-items: center;
  }
  p {
    max-width: 600px;
  }
`