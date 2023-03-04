import styled from "styled-components";

export const WrapLine = styled.div`
  width: 80%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #5a5a5a;
  @media (max-width:900px) {
    width: 70%;
    border-bottom: 1px solid #5a5a5a;
  }
   @media (max-width:600px) {
    border-bottom: 1px solid #5a5a5a;
  }
`;
